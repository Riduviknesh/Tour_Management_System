package com.example.tourbooking.repository;

import com.example.tourbooking.model.Booking;
import com.example.tourbooking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUser(User user);
}
