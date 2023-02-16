package com.energy.provider.pojo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "provider")
public class Provider {
    @Id
    private String name;
    private int chargesConception;
    private String status;

    public Provider(String name, int chargesConception) {
        this.name = name;
        this.chargesConception = chargesConception;
    }
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getChargesConception() {
        return chargesConception;
    }
    public void setChargesConception(int chargesConception) {
        this.chargesConception = chargesConception;
    }

}