package com.energy.provider.repository;

import com.energy.provider.pojo.Provider;
import com.energy.provider.pojo.Readings;
import com.energy.provider.pojo.SmartMeter;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class SmartMeterRepository {

    @Autowired
    private MongoTemplate mongoTemplate;
    public String enrollSmartMeter(String userId) {
        mongoTemplate.save(new SmartMeter(userId),"smartMeter");
        return "smart meter created for requested User";
    }

    public String addMeters(String userId,String providerName) {
        Provider provider = mongoTemplate.findById(providerName,Provider.class);
        mongoTemplate.save(new SmartMeter(userId,provider),"smartMeter");
        return "Your Smart meter Request under on Admin's view";
    }

        public List<SmartMeter> allSmartMeter() {
        List<SmartMeter> al =  mongoTemplate.findAll(SmartMeter.class);
        return al;
    }
        public List<SmartMeter> smartMeterRequests() {
        List<SmartMeter> pendingMeters = mongoTemplate.findAll(SmartMeter.class).stream().filter(c ->  c.getConnectionStatus().equals("pending"))
            .collect(Collectors.toList());
        return pendingMeters;
    }
        public  ResponseEntity<?> enableMeterConnection(String meterId) {
        mongoTemplate.findAndModify(new Query().addCriteria(Criteria.where("smartMeterId").is(meterId))
                ,new Update().set("connectionStatus","Approved"),SmartMeter.class);
            return  new ResponseEntity<>("Enabled", HttpStatus.OK);
    }
        public ResponseEntity<?> disableMeterConnection(String meterId) {
        mongoTemplate.findAndModify(new Query().addCriteria(Criteria.where("smartMeterId").is(meterId))
                ,new Update().set("connectionStatus","Disabled"),SmartMeter.class);
        return  new ResponseEntity<>("Disabled", HttpStatus.OK);
     }
       public SmartMeter viewSmartMeter(String meterId) {
        SmartMeter meter =  mongoTemplate.findById(meterId, SmartMeter.class);
        return meter;
    }

    public List<SmartMeter> userSmartMeters(String userId) {
        String result = userId.substring(1, userId.length() - 1);
        List<SmartMeter> meterList = mongoTemplate.findAll(SmartMeter.class);
        List<SmartMeter> userMeterList = meterList.stream().filter(x -> x.getUserId().equals(result)).collect(Collectors.toList());
        return userMeterList;
    }
    @Scheduled(cron = "1 * * * * *")
    public void saveReadings()
    {
       List<SmartMeter> meterList =  mongoTemplate.findAll(SmartMeter.class);
       Readings read = new Readings(4);
        for(SmartMeter meter : meterList) {
            if(meter.getReadings().size()!=0)
            {
            long amount = meter.getReadings().get(meter.getReadings().size() - 1).getAmount();
            amount = amount + meter.getProvider().getChargesConception()*read.getUnitsConsumed();
            read.setAmount(amount);
            meter.getReadings().add(read);
            mongoTemplate.updateMulti(new Query().addCriteria(Criteria.where("connectionStatus")
                    .is("Approved")), new Update().set("readings", meter.getReadings()), SmartMeter.class);
            }
            else
            {
               read.setAmount(read.getAmount()*meter.getProvider().getChargesConception());
                meter.getReadings().add(read);
                mongoTemplate.updateMulti(new Query().addCriteria(Criteria.where("connectionStatus")
                        .is("Approved")), new Update().set("readings", meter.getReadings()), SmartMeter.class);
            }
        }
    }

}
