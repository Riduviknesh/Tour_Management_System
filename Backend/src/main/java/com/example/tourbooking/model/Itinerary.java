package com.example.tourbooking.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "itineraries")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Itinerary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String location;

    @Column(name = "duration_days")
    private int durationDays;

    @Column(nullable= false)
    private LocalDate startDate;

    @Column(nullable = false)
    private LocalDate endDate;

    private double price;
}
