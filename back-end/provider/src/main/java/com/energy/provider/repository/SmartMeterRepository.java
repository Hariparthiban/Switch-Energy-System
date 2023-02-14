package com.energy.provider.repository;

import com.energy.provider.pojo.Provider;
import com.energy.provider.pojo.SmartMeter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class SmartMeterRepository {

    @Autowired
    private MongoTemplate mongoTemplate;
    public String enrollSmartMeter(String userId) {
        mongoTemplate.save(new SmartMeter(userId));
        return "smart meter created for requested User";
    }
        public List<SmartMeter> allSmartMeter() {
      return mongoTemplate.findAll(SmartMeter.class);
    }
        public List<SmartMeter> smartMeterRequests() {
        List<SmartMeter> pendingMeters = mongoTemplate.findAll(SmartMeter.class).stream().filter(c ->  c.getConnectionStatus().equals("pending"))
            .collect(Collectors.toList());
        return pendingMeters;
    }
        public String enableMeterConnection(String meterId) {
        mongoTemplate.findAndModify(new Query().addCriteria(Criteria.where("smartMeterId").is(meterId))
                ,new Update().set("connectionStatus","Approved"),SmartMeter.class);
        return "Connection Established for Requested SmartMeter";
    }
        public String disableMeterConnection(String meterId) {
        mongoTemplate.findAndModify(new Query().addCriteria(Criteria.where("smartMeterId").is(meterId))
                ,new Update().set("connectionStatus","Disabled"),SmartMeter.class);
        return "Connection Disabled for Requested SmartMeter";
    }
       public SmartMeter viewSmartMeter(String meterId) {
        return mongoTemplate.findById(meterId,SmartMeter.class);
    }
       public Provider viewProvider(String meterId) {
       SmartMeter meter = mongoTemplate.findById(meterId, SmartMeter.class);
       return meter.getProvider();
    }

    public List<SmartMeter> userSmartMeters(String userId) {
        List<SmartMeter> meterList = mongoTemplate.findAll(SmartMeter.class);
        List<SmartMeter> userMeterList = meterList.stream().filter(x -> x.getUserId().equals(userId)).collect(Collectors.toList());
        return userMeterList;
    }

}
