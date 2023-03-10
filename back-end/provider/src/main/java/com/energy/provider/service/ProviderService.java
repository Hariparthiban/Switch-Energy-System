package com.energy.provider.service;

import com.energy.provider.pojo.Provider;
import com.energy.provider.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ProviderService {
    @Autowired
    private ProviderRepository providerRepository;

    public String enableProvider(String providerName) {
        return providerRepository.enableProvider(providerName);
    }
    public String disableProvider(String providerName) {
        return providerRepository.disableProvider(providerName);
    }
    public void switchProvider(String meterId,String switchingProvider) {
         providerRepository.switchProvider(meterId,switchingProvider);
    }
    public String createProvider(Provider provider)
    {
        return providerRepository.createProvider(provider);
    }

    public List<Provider> getProviders()
    {
       return providerRepository.getProviders();
    }
}
