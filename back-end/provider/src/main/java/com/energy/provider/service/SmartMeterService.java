package com.energy.provider.service;

import com.energy.provider.pojo.Provider;
import com.energy.provider.pojo.SmartMeter;
import com.energy.provider.repository.SmartMeterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SmartMeterService {
@Autowired
    private SmartMeterRepository smartMeterRepository;
  public String enrollMeter(String userId)
 {
    return smartMeterRepository.enrollSmartMeter(userId);
 }

     public List<SmartMeter> smartMeters() {
    return smartMeterRepository.allSmartMeter();
 }
     public List<SmartMeter> smartMeterRequests()
 {
     return smartMeterRepository.smartMeterRequests();
 }
     public  ResponseEntity<?> enableMeterConnection(String meterId) {
      return smartMeterRepository.enableMeterConnection(meterId);
    }
    public ResponseEntity<?> disableMeterConnection(String meterId) {
      return smartMeterRepository.disableMeterConnection(meterId);
    }

    public String addMeters(String userId,String providerName) {
       return smartMeterRepository.addMeters(userId,providerName);
    }
    public SmartMeter viewSmartMeter(String meterId) {
     return smartMeterRepository.viewSmartMeter(meterId);
    }


    public List<SmartMeter> userSmartMeters(String userId) {
        return smartMeterRepository.userSmartMeters(userId);
    }
}
