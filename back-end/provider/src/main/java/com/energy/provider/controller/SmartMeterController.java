package com.energy.provider.controller;
import com.energy.provider.pojo.Provider;
import com.energy.provider.pojo.Readings;
import com.energy.provider.pojo.SmartMeter;
import com.energy.provider.service.SmartMeterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RestController
@CrossOrigin("*")
@RequestMapping("smartMeter")
public class SmartMeterController {
     @Autowired
     private SmartMeterService smartMeterService;
     @GetMapping("/requested-meters")
    public List<SmartMeter> smartMeterRequests()
    {
        return smartMeterService.smartMeterRequests();
    }
    @GetMapping("/allMeters")
    public List<SmartMeter> viewSmartMeters()
    {
        return smartMeterService.smartMeters() ;
    }
    @PutMapping("enable/{meterId}")
    public  ResponseEntity<?> enableMeterConnection(@PathVariable String meterId) {
        return smartMeterService.enableMeterConnection(meterId);
    }
    @PutMapping("disable/{meterId}")
    public ResponseEntity<?> disableMeterConnection(@PathVariable String meterId)
    {
        return smartMeterService.disableMeterConnection(meterId);
    }
    @GetMapping("view-meter/{meterId}")
      public SmartMeter viewSmartMeter(@PathVariable String meterId) {
        return smartMeterService.viewSmartMeter(meterId);
    }

    @PutMapping("addmeter/{userId}/{providerName}")
    public String addMeters(@PathVariable String userId,@PathVariable String providerName) {
        return  smartMeterService.addMeters(userId,providerName);
    }

    @GetMapping("/userMeterList/{userId}")
    public List<SmartMeter> userSmartMeters(@PathVariable String userId) {
       return smartMeterService.userSmartMeters(userId);
    }

    @GetMapping("/Readings/{meterId}")
    public ResponseEntity<?> readingsCost(@PathVariable String meterId)
    {
        return smartMeterService.readingsCost(meterId);
    }
}
