package com.example.tourbooking.controller;

import com.example.tourbooking.dto.ItineraryDTO;
import com.example.tourbooking.model.Itinerary;
import com.example.tourbooking.service.ItineraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/itineraries")
public class ItineraryController {

    @Autowired
    private ItineraryService itineraryService;

    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Itinerary> addItinerary(@RequestBody ItineraryDTO itineraryDTO) {
        return ResponseEntity.ok(itineraryService.addItinerary(itineraryDTO));
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<ItineraryDTO>> getAllItineraries() {
        return ResponseEntity.ok(itineraryService.getAllItineraries());
    }
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ItineraryDTO> getItineraryById(@PathVariable Long id) {
        return ResponseEntity.ok(itineraryService.getItineraryById(id));
    }

    @GetMapping("/title/{title}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ItineraryDTO> getItineraryByTitle(@PathVariable String title) {
        return ResponseEntity.ok(itineraryService.getItineraryByTitle(title));
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Itinerary> updateItinerary(@PathVariable Long id, @RequestBody ItineraryDTO itineraryDTO) {
        return ResponseEntity.ok(itineraryService.updateItinerary(id, itineraryDTO));
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteItinerary(@PathVariable Long id) {
        itineraryService.deleteItinerary(id);
        return ResponseEntity.ok("Itinerary deleted successfully.");
    }
}
