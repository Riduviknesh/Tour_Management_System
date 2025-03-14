package com.example.tourbooking.repository;

import com.example.tourbooking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    boolean existsByUsername(String username);



    boolean existsByEmailId(String emailId);

    User findByUsernameAndPassword(String username, String password);
}
