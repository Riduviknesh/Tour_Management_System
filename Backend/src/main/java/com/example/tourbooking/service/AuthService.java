package com.example.tourbooking.service;


import com.example.tourbooking.model.User;
import com.example.tourbooking.repository.UserRepository;
import com.example.tourbooking.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Map<String, Object> login(String username, String password) throws Exception {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new Exception("Invalid username/password");
        }
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (Exception e) {
            throw new Exception("Invalid username/password", e);
        }

        // Generate the token
        String token = jwtUtil.generateToken(username, user.getRole());

        // Create a Map to hold the response
        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("user", user); // Include user details

        return response;
    }

    public User register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
    public Boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }



    public Boolean existsByEmailId(String emailId) {
        return userRepository.existsByEmailId(emailId);
    }

    public String getUserRole(String username) {
        User user = userRepository.findByUsername(username);
        return user.getRole(); // Assuming the `role` field exists in the `User` entity
    }



    public User findByUsernameAndPassword(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }
}