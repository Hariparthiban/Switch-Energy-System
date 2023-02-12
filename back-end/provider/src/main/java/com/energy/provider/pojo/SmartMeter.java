package com.energy.provider.pojo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection="smartMeter")
public class SmartMeter {

    private String userId;
    @Id
    private String smartMeterId;
    private List<Readings> readingList;
    private String connectionStatus;
    private Provider provider;

    public SmartMeter(String userId) {
        this.userId = userId;
        this.smartMeterId= smartMeterId;
        this.connectionStatus = "pending";
        this.provider = new Provider("Power for ALL",2);
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

    public List<Readings> getReadingList() {
        return readingList;
    }

    public void setReadingList(List<Readings> readingList) {
        this.readingList = readingList;
    }

    public String getConnectionStatus() {
        return connectionStatus;
    }

    public void setConnectionStatus(String connectionStatus) {
        this.connectionStatus = connectionStatus;
    }
}
