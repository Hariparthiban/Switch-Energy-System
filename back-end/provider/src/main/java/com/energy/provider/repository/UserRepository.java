package com.energy.provider.repository;
import com.energy.provider.pojo.SmartMeter;
import com.energy.provider.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
@Repository
public class UserRepository {
   @Autowired
    private MongoTemplate mongoTemplate;
    public String createUser(User user) {
       mongoTemplate.save(new User(user.getUserName(),user.getEmail(),user.getPhone(),user.getPassword()));
       return "Requested Account Created";
    }
    public List<User> viewEndUsers() {
       List<User> userList = mongoTemplate.findAll(User.class);
       List<User> endUser = userList.stream().filter(c -> c.getRole().equals("user")).collect(Collectors.toList());
       return endUser;
    }
    public ResponseEntity<?> loginUser(long phone, String password)
    {
        List<User> userList = mongoTemplate.findAll(User.class);
        List<User> endUserList = userList.stream().filter(c -> c.getRole().equals("user")).collect(Collectors.toList());
        boolean phno = endUserList.stream().anyMatch(x -> x.getPhone() == phone);
        boolean passcode = endUserList.stream().anyMatch(x -> x.getPassword().equals(password));
       if(phno && passcode ) {
           return new ResponseEntity<>("Authenticated Successfully", HttpStatus.OK);
       }
       else{
           return new ResponseEntity<String>("Invalid Credentials", HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }
    public Optional<User> getUser(long phone)
    {
        List<User> userList = mongoTemplate.findAll(User.class);
        List<User> endUserList = userList.stream().filter(c -> c.getRole().equals("user")).collect(Collectors.toList());
        Optional <User> user  = endUserList.stream().filter(x -> x.getPhone() == phone ).findFirst();
        return  user;
    }
}