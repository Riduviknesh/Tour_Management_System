package com.example.tourbooking.model;

public class AuthRequest {

    public String getRole;
    private String username;
    private String password;
private String role;
    public AuthRequest(String username, String password,String role) {
        super();
        this.username = username;
        this.password = password;
        this.role= role;
    }
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
}