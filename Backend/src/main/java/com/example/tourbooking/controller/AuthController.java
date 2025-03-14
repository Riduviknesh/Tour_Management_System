package com.example.tourbooking.controller;

import com.example.tourbooking.model.AuthRequest;
import com.example.tourbooking.model.User;
import com.example.tourbooking.security.JwtUtil;
import com.example.tourbooking.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        return ResponseEntity.ok(authService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String username, @RequestParam String password) throws Exception {
        Map<String, Object> loginResponse = authService.login(username, password);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/checkUsername/{username}")
    public String userValidation(@PathVariable String username) {
        Boolean bool = authService.existsByUsername(username);
        if(bool)
            return "true";
        else
            return "false";
    }

    @GetMapping("/checkUserMailId/{emailId}")
    public String emailValidation(@PathVariable String emailId) {
        Boolean bool = authService.existsByEmailId(emailId);
        if(bool)
            return "true";
        else
            return "false";
    }

//    @PostMapping("/authenticate")
//    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
//        try {
//            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
//        } catch (Exception e) {
//            throw new Exception("Invalid username/password");
//        }
//        return jwtUtil.generateToken(authRequest.getUsername(),authRequest.getRole);
//    }
@PostMapping("/authenticate")
public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
    try {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
        );
    } catch (Exception e) {
        throw new Exception("Invalid username/password");
    }

    // Fetch the user's role from the database
    String role = authService.getUserRole(authRequest.getUsername());

    // Generate token with username and role
    return jwtUtil.generateToken(authRequest.getUsername(), role);
}
}