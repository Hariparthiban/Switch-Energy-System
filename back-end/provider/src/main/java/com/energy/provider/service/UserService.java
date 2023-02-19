package com.energy.provider.service;

import com.energy.provider.pojo.User;

import com.energy.provider.pojo.UserInfoUserDetails;
import com.energy.provider.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    public ResponseEntity<String> createUser(User user)
    {
        return userRepository.createUser(user);
    }
    public List<User> viewEndUsers() {
        return userRepository.viewEndUsers();
    }
    public  Optional <User> findUser(String userName)
    {
        return userRepository.findUser(userName);
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByName(username);
        return user.map(UserInfoUserDetails::new ).orElseThrow(()->new UsernameNotFoundException("User Not Found"+username));

    }
}
