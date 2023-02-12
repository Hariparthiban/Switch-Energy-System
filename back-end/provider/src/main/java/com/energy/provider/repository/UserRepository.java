package com.energy.provider.repository;

import com.energy.provider.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class UserRepository {
   @Autowired
    private MongoTemplate mongoTemplate;
    public String createUser(User user) {
       mongoTemplate.save(user);
       return "Requested Account Created";
    }
    public List<User> viewEndUsers() {
       List<User> userList = mongoTemplate.findAll(User.class);
       List<User> endUser = userList.stream().filter(c -> c.getRole().equals("user")).collect(Collectors.toList());
       return endUser;
    }

}