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
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Repository
public class UserRepository {
   @Autowired
    private MongoTemplate mongoTemplate;
   @Autowired
   private PasswordEncoder passwordEncoder;
    public ResponseEntity<String> createUser(User user) {
        boolean flag =  mongoTemplate.exists(new Query().addCriteria(Criteria.where("userName").is(user.getUserName())),User.class);
      if(flag) {
          return new ResponseEntity<String>("User Name Already Exists",HttpStatus.INTERNAL_SERVER_ERROR);
      }
      else{
          mongoTemplate.save(new User(user.getUserName(), user.getEmail(), user.getPhone(), passwordEncoder.encode(user.getPassword())));
          return new ResponseEntity<String>("Created Sucessfully",HttpStatus.OK);
      }
    }
    public ResponseEntity<String> createAdmin(User user) {
        boolean flag =  mongoTemplate.exists(new Query().addCriteria(Criteria.where("userName").is(user.getUserName())),User.class);
        if(flag) {
            return new ResponseEntity<String>("Admin Name Already Exists",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        else{
            mongoTemplate.save(new User(user.getUserName(), user.getEmail(), user.getPhone(), passwordEncoder.encode(user.getPassword())));
            return new ResponseEntity<String>("Created Sucessfully",HttpStatus.OK);
        }
    }



    public List<User> viewEndUsers() {
       List<User> userList = mongoTemplate.findAll(User.class);
       List<User> endUser = userList.stream().filter(c -> c.getRole().equals("user")).collect(Collectors.toList());
       return endUser;
    }
    public Optional<User> findByName(String name)
    {
        List<User> userList = mongoTemplate.findAll(User.class);
        List<User> endUserList = userList.stream().filter(c -> c.getRole().equals("user")).collect(Collectors.toList());
        Optional <User> user  = endUserList.stream().filter(x -> x.getUserName().equals(name)).findFirst();
        return  user;
    }

    public Optional<User> findUser(String name)
    {
        String result = name.substring(1, name.length() - 1);
        List<User> userList = mongoTemplate.findAll(User.class);
        List<User> endUserList = userList.stream().filter(c -> c.getRole().equals("user")).collect(Collectors.toList());
        Optional <User> user  = endUserList.stream().filter(x -> x.getUserName().equals(result)).findFirst();
        return user;
    }
}