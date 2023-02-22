package com.energy.provider.repository;
import com.energy.provider.pojo.SmartMeter;
import com.energy.provider.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Repository
public class UserRepository {
   @Autowired
    private MongoTemplate mongoTemplate;
   @Autowired
   private PasswordEncoder passwordEncoder;
    public ResponseEntity<?> createUser(User user) {
        boolean flag =  mongoTemplate.exists(new Query().addCriteria(Criteria.where("userName").is(user.getUserName())),User.class);
      if(flag) {
          return new ResponseEntity<String>("User Name Already Exists",HttpStatus.INTERNAL_SERVER_ERROR);
      }
      else{
          HashMap<String,String>al = new HashMap<>();
          user.setRoles("User");
          user.setPassword(passwordEncoder.encode(user.getPassword()));
          mongoTemplate.save(user);
          System.out.println(user.getUserName());
          al.put("userId", user.getId());
          return new ResponseEntity<Object>(al,HttpStatus.OK);
      }
    }
    public ResponseEntity<?> createAdmin(User user) {
        boolean flag =  mongoTemplate.exists(new Query().addCriteria(Criteria.where("userName").is(user.getUserName())),User.class);
        if(flag) {
            return new ResponseEntity<String>("Admin Name Already Exists",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        else{
            HashMap<String,String>al = new HashMap<>();
            user.setRoles("Admin");
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            mongoTemplate.save(user);
            al.put("userId", user.getId());
            return new ResponseEntity<Object>(al,HttpStatus.OK);
        }
    }
    public List<User> viewEndUsers() {
       List<User> userList = mongoTemplate.findAll(User.class);
       List<User> endUser = userList.stream().filter(c -> c.getRoles().equals("User")).collect(Collectors.toList());
       return endUser;
    }
    public Optional<User> findByName(String name)
    {
        List<User> userList = mongoTemplate.findAll(User.class);
        List<User> endUserList = userList.stream().filter(c -> c.getRoles().equals("User")).collect(Collectors.toList());
        Optional <User> user  = endUserList.stream().filter(x -> x.getUserName().equals(name)).findFirst();
        return  user;
    }

    public Object findRole(String userName)
    {
        String role = mongoTemplate.findOne(Query.query(Criteria.where("userName").is(userName)),User.class).getRoles();
        HashMap<String,String>al = new HashMap<>();
        al.put("role",role);
        return al;
    }
    public Optional<User> findUser(String name)
    {
        String result = name.substring(1, name.length() - 1);
        List<User> userList = mongoTemplate.findAll(User.class);
        List<User> endUserList = userList.stream().filter(c -> c.getRoles().equals("User")).collect(Collectors.toList());
        Optional <User> user  = endUserList.stream().filter(x -> x.getUserName().equals(result)).findFirst();
        return user;
    }
}