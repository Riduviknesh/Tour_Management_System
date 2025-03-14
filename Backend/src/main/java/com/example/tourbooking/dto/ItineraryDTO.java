package com.example.tourbooking.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ItineraryDTO {
    private Long id;
    private String title;
    private String description;
    private String location;
    private int durationDays;
    private double price;
    private LocalDate startDate;
    private LocalDate endDate;
}
