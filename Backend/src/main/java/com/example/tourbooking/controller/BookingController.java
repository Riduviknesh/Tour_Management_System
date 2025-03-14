package com.example.tourbooking.controller;

import com.example.tourbooking.dto.BookingDTO;
import com.example.tourbooking.model.Booking;
import com.example.tourbooking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/create")
    @PreAuthorize("isAuthenticated()")  // Only logged-in users can book
    public ResponseEntity<Booking> createBooking(Authentication authentication, @RequestBody BookingDTO bookingDTO) {
        return ResponseEntity.ok(bookingService.createBooking(authentication, bookingDTO));
    }

    @GetMapping("/user")
    @PreAuthorize("isAuthenticated()")  // Only logged-in users can see their bookings
    public ResponseEntity<List<Booking>> getUserBookings(Authentication authentication) {
        return ResponseEntity.ok(bookingService.getUserBookings(authentication));
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")  // Only admins can see all bookings
    public ResponseEntity<List<Booking>> getAllBookings() {
        return ResponseEntity.ok(bookingService.getAllBookings());
    }
}
