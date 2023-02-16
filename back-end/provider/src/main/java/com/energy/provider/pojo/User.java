package com.energy.provider.pojo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
public class User {
    @Id
    private String  id;
    private String userName;
    private String email;
    private String password;
    private long phone;
    private String roles;
    public User(String userName, String email,long phone,String password) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.roles = "user";
    }
    public String getId() {
        return id;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return roles;
    }

    public void setRole(String role) {
        this.roles = role;
    }

    public void setId(String id) {
        this.id = id;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }
}
