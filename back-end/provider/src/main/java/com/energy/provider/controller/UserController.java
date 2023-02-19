package com.energy.provider.controller;
import com.energy.provider.dto.AuthRequest;
import com.energy.provider.pojo.User;
import com.energy.provider.pojo.UserInfoUserDetails;
import com.energy.provider.service.JwtService;
import com.energy.provider.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("user")
@Controller
@CrossOrigin("*")
public class UserController {
  @Autowired
    private UserService userService;
  @Autowired
  private JwtService jwtService;
  @Autowired
  private AuthenticationManager authenticationManager;
       @PostMapping("/enroll")
       public ResponseEntity<String> createUser(@RequestBody User user)
       {
           return userService.createUser(user);
       }
    @GetMapping("/view-users")
       public List<User> viewEndUsers() {
        return userService.viewEndUsers();
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       return userService.loadUserByUsername(username);
    }

    @GetMapping("/get/{username}")
    public  Optional <User> finduser(String userName)
    {
        return userService.findUser(userName);
    }

    @PostMapping("/authenticate")
    public Object authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Map<String,String> obj = new HashMap<>();
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            obj.put("token",jwtService.generateToken(authRequest.getUserName()));
            return obj;
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
    }
}