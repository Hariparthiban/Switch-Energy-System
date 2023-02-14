package com.energy.provider.controller;
import com.energy.provider.pojo.Provider;
import com.energy.provider.pojo.SmartMeter;
import com.energy.provider.service.SmartMeterService;
import org.springframework.beans.factory.annotation.Autowired;
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
     @PostMapping("/{userId}/enroll")
     public String enrollSmartMeter(@PathVariable String userId) {
         return smartMeterService.enrollMeter(userId);
     }
     @GetMapping("requested-meters")
    public List<SmartMeter> smartMeterRequests()
    {
        return smartMeterService.smartMeterRequests();
    }
    @PutMapping("enable/{meterId}")
    public String enableMeterConnection(@PathVariable String meterId) {
        return smartMeterService.enableMeterConnection(meterId);
    }
    @PutMapping("disable/{meterId}")
    public String disableMeterConnection(@PathVariable String meterId) {return smartMeterService.disableMeterConnection(meterId);
    }
    @GetMapping("view-meter/{meterId}")
      public SmartMeter viewSmartMeter(@PathVariable String meterId) {
        return smartMeterService.viewSmartMeter(meterId);
    }
    @GetMapping("view-provider/{meterId}")
    public Provider viewProvider(@PathVariable String meterId) {
        return smartMeterService.viewProvider(meterId);
    }

    @GetMapping("/userMeterList/{userId}")
    public List<SmartMeter> userSmartMeters(@PathVariable String userId) {
         System.out.print(userId);
       return smartMeterService.userSmartMeters(userId);
    }
}
