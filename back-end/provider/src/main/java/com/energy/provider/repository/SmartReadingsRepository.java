//package com.energy.provider.repository;
//
//import com.energy.provider.pojo.Readings;
//import com.energy.provider.pojo.SmartMeter;
//import com.energy.provider.pojo.SmartMeterReadings;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.Query;
//import org.springframework.data.mongodb.core.query.Update;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//public class SmartReadingsRepository {
//    @Autowired
//    private MongoTemplate mongoTemplate;
//
//    @Scheduled(cron = "1 * * * * *")
//    public void saveReadings()
//    {
//         Readings read  = new Readings(4);
//         mongoTemplate.updateMulti(new Query().addCriteria(Criteria.where("connectionStatus")
//                 .is("Approved")),new Update().set("smartMeterReadings.readings",read),SmartMeter.class);
//    }
//
//}
