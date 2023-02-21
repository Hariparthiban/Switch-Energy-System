package com.energy.provider.repository;
import com.energy.provider.pojo.Provider;
import com.energy.provider.pojo.SmartMeter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProviderRepository {
    @Autowired
    private MongoTemplate mongoTemplate;
    public String enableProvider(String providerName) {
        Provider provider =  mongoTemplate.findById(providerName, Provider.class);
        mongoTemplate.findAndModify(new Query().addCriteria(Criteria.where("name").is(providerName)),new Update().set("status","approved"),Provider.class);
        return "Provider is enabled";
    }
    public String disableProvider(String providerName) {
        Provider provider =  mongoTemplate.findById(providerName, Provider.class);
        mongoTemplate.findAndModify(new Query().addCriteria(Criteria.where("name").is(providerName)),new Update().set("status","Not approved"),Provider.class);
        return "Provider is Disabled";
    }
     public void switchProvider(String meterId,String switchingProvider) {
         Provider provider = mongoTemplate.findById(switchingProvider, Provider.class);
         mongoTemplate.findAndModify(new Query().addCriteria(Criteria.where("smartMeterId").is(meterId)), new Update().set("Provider", provider), SmartMeter.class);
     }
    public String createProvider(Provider provider)
    {
        mongoTemplate.save(new Provider(provider.getName(),provider.getChargesConception()));
        return "Created New provider";
    }

    public List<Provider> getProviders()
    {
        return mongoTemplate.findAll(Provider.class);
    }
}