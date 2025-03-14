package com.example.tourbooking.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Date;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userID;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(unique = true, nullable = false)
    private String emailId;

    @Column(unique = true, nullable = false)
    private String mobile;

    @Column(nullable = false)
    private String role;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt = new Date();

}
