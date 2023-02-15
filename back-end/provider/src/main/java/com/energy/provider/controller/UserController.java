package com.energy.provider.controller;
import com.energy.provider.pojo.User;
import com.energy.provider.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("user")
@Controller
@CrossOrigin("*")
public class UserController {
  @Autowired
    private UserService userService;
       @PostMapping("/enroll")
       public String createUser(@RequestBody User user)
       {
           return userService.createUser(user);
       }
    @GetMapping("view-users")
       public List<User> viewEndUsers() {
        return userService.viewEndUsers();
    }
    @GetMapping("/{phone}/{password}/login")
    public ResponseEntity<?> loginUser(@PathVariable long phone, @PathVariable String password)
    {
        return userService.loginUser(phone,password);
    }
    @GetMapping("get/{phone}")
    public Optional<User> getUser(@PathVariable long phone)
    {
        return userService.getUser(phone);
    }
}