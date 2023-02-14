package com.energy.provider.service;

import com.energy.provider.pojo.User;
import com.energy.provider.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    public String createUser(User user)
    {
        return userRepository.createUser(user);
    }

    public List<User> viewEndUsers() {
        return userRepository.viewEndUsers();
    }

    public ResponseEntity<?> loginUser(String phone, String password)
    {
      return userRepository.loginUser(phone,password);
    }
}
