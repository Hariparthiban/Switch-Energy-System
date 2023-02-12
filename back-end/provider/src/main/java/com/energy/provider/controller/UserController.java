package com.energy.provider.controller;
import com.energy.provider.pojo.User;
import com.energy.provider.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@Controller
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
}