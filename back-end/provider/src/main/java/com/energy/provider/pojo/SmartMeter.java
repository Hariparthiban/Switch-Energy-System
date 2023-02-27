package com.energy.provider.pojo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
@Document(collection="smartMeter")
public class SmartMeter {

    @Id
    private String smartMeterId;
    private String userId;
    private List<Readings> readings;
    private String connectionStatus;
    private Provider provider;
    public SmartMeter(String userId,Provider provider) {
        this.userId = userId;
        this.connectionStatus = "pending";
        this.provider = new Provider(provider.getName(), provider.getChargesConception());
        this.readings = new ArrayList<Readings>();
    }
    public String getUserId() {
        return userId;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSmartMeterId() {
        return smartMeterId;
    }

    public void setSmartMeterId(String smartMeterId) {
        this.smartMeterId = smartMeterId;
    }

    public List<Readings> getReadings() {
        return readings;
    }

    public void setReadings(List<Readings> readings) {
        this.readings = readings;
    }

    public String getConnectionStatus() {
        return connectionStatus;
    }

    public void setConnectionStatus(String connectionStatus) {
        this.connectionStatus = connectionStatus;
    }
}
