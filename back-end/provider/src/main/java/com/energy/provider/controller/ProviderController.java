package com.energy.provider.controller;

import com.energy.provider.pojo.Provider;
import com.energy.provider.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("providers")
@Controller
public class ProviderController {

    @Autowired
       private ProviderService providerService;
    @PutMapping("{providerName}/enable")
    public String enableProvider(@PathVariable String providerName) {
        return  providerService.enableProvider(providerName);
    }
    @PutMapping("{providerName}/disable")
    public String disableProvider(String providerName) {
        return  providerService.disableProvider(providerName);
    }
    @PutMapping("{meterId}/{switchingProvider}/make-switch")
    public void switchProvider(@PathVariable String meterId, @PathVariable String switchingProvider) {
          providerService.switchProvider(meterId,switchingProvider);
    }
    @GetMapping("get-providers")
    public List<Provider> getProviders()
    {
        return providerService.getProviders();
    }

    @PostMapping("create")
    public String createProvider(@RequestBody Provider provider)
    {
        return providerService.createProvider(provider);
    }

}
