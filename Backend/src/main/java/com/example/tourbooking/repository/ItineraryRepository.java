package com.example.tourbooking.repository;

import com.example.tourbooking.model.Itinerary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
    Optional<Itinerary> findByTitle(String title);
}
