package com.energy.provider.pojo;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
@Document(collection = "Readings")
public class Readings {
    private LocalDateTime date;
    private  long timeStamp;
    private long unitsConsumed;
    private long amount = 0;

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public Readings(long unitsConsumed) {
        this.date = LocalDateTime.now();
        this.timeStamp = System.currentTimeMillis();
        this.unitsConsumed = unitsConsumed;
    }
    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
    public long getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(long timeStamp) {
        this.timeStamp = timeStamp;
    }

    public long getUnitsConsumed() {
        return unitsConsumed;
    }

    public void setUnitsConsumed(long unitsConsumed) {
        this.unitsConsumed = unitsConsumed;
    }
}