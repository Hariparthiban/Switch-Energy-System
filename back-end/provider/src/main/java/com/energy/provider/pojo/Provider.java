package com.energy.provider.pojo;

public class Provider {
    private String name;
    private int chargesConception;

    public Provider(String name, int chargesConception) {
        this.name = name;
        this.chargesConception = chargesConception;
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