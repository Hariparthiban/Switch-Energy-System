package com.energy.provider.controller;

import com.energy.provider.pojo.Provider;
import com.energy.provider.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RequestMapping("provider")
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
    @PutMapping("{currentProvider}/switchingProvider/make-switch")
    public String switchProvider(String currentProvider,String switchingProvider) {
        return  providerService.switchProvider(currentProvider,switchingProvider);
    }

    @PostMapping("/create-provider")
    public String createProvider(@RequestBody Provider provider)
    {
        return providerService.createProvider(provider);
    }

}
