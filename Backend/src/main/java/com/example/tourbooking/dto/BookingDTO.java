package com.example.tourbooking.dto;

import java.time.LocalDate;
import lombok.Data;
@Data
public class BookingDTO {
    private Long itineraryId;
    private LocalDate bookingDate;

    // Getters and Setters
}
