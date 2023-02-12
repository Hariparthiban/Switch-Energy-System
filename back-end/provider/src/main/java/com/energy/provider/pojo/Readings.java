package com.energy.provider.pojo;
import java.util.Date;
public class Readings {
    private String smartMeterId;
    private Date date;
    private long timeStamp;
    private double unitsConsumed;
    private long amount;

    public Readings(String smartMeterId, Date date, long timeStamp, double unitsConsumed) {
        this.smartMeterId = smartMeterId;
        this.date = date;
        this.timeStamp = timeStamp;
        this.unitsConsumed = unitsConsumed;
    }

    public String getSmartMeterId() {
        return smartMeterId;
    }
    public void setSmartMeterId(String smartMeterId) {
        this.smartMeterId = smartMeterId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public long getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(long timeStamp) {
        this.timeStamp = timeStamp;
    }

    public double getUnitsConsumed() {
        return unitsConsumed;
    }

    public void setUnitsConsumed(double unitsConsumed) {
        this.unitsConsumed = unitsConsumed;
    }
}