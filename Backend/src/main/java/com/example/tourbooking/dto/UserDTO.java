package com.example.tourbooking.dto;

public class UserDTO {
    private String username;
    private String password;
    private String emailId;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return emailId;
    }

    public void setEmail(String email) {
        this.emailId = emailId;
    }
}