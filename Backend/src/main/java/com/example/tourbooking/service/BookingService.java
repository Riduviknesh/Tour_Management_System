package com.example.tourbooking.service;

import com.example.tourbooking.dto.BookingDTO;
import com.example.tourbooking.model.Booking;
import com.example.tourbooking.model.Itinerary;
import com.example.tourbooking.model.User;
import com.example.tourbooking.repository.BookingRepository;
import com.example.tourbooking.repository.ItineraryRepository;
import com.example.tourbooking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ItineraryRepository itineraryRepository;

    public Booking createBooking(Authentication authentication, BookingDTO bookingDTO) {
        String username = authentication.getName();
        User user = Optional.ofNullable(userRepository.findByUsername(username))
                .orElseThrow(() -> new RuntimeException("User not found"));

        Optional<Itinerary> itineraryOptional = itineraryRepository.findById(bookingDTO.getItineraryId());
        Itinerary itinerary = itineraryOptional.orElseThrow(() -> new RuntimeException("Itinerary not found"));

        Booking booking = new Booking();
        booking.setUser(user);
        booking.setItinerary(itinerary);
        booking.setBookingDate(bookingDTO.getBookingDate());
        booking.setStatus("PENDING");

        return bookingRepository.save(booking);
    }

    public List<Booking> getUserBookings(Authentication authentication) {
        String username = authentication.getName();
        User user = Optional.ofNullable(userRepository.findByUsername(username))
                .orElseThrow(() -> new RuntimeException("User not found"));

        return bookingRepository.findByUser(user);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}
