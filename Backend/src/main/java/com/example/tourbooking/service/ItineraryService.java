package com.example.tourbooking.service;

import com.example.tourbooking.dto.ItineraryDTO;
import com.example.tourbooking.model.Itinerary;
import com.example.tourbooking.repository.ItineraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ItineraryService {

    @Autowired
    private ItineraryRepository itineraryRepository;

    public Itinerary addItinerary(ItineraryDTO itineraryDTO) {
        Itinerary itinerary = new Itinerary();
        itinerary.setTitle(itineraryDTO.getTitle());
        itinerary.setDescription(itineraryDTO.getDescription());
        itinerary.setLocation(itineraryDTO.getLocation());
        itinerary.setDurationDays(itineraryDTO.getDurationDays());
        itinerary.setStartDate(itineraryDTO.getStartDate());
        itinerary.setEndDate(itineraryDTO.getEndDate());
        itinerary.setPrice(itineraryDTO.getPrice());
        return itineraryRepository.save(itinerary);
    }

    public List<ItineraryDTO> getAllItineraries() {
        return itineraryRepository.findAll()
                .stream()
                .map(itinerary -> {
                    ItineraryDTO dto = new ItineraryDTO();
                    dto.setId(itinerary.getId());
                    dto.setTitle(itinerary.getTitle());
                    dto.setDescription(itinerary.getDescription());
                    dto.setLocation(itinerary.getLocation());
                    dto.setDurationDays(itinerary.getDurationDays());
                    dto.setPrice(itinerary.getPrice());
                    dto.setStartDate(itinerary.getStartDate());
                    dto.setEndDate(itinerary.getEndDate());
                    return dto;
                })
                .collect(Collectors.toList());
    }
    public Itinerary updateItinerary(Long id, ItineraryDTO itineraryDTO) {
        Optional<Itinerary> optionalItinerary = itineraryRepository.findById(id);
        if (optionalItinerary.isPresent()) {
            Itinerary itinerary = optionalItinerary.get();
            itinerary.setTitle(itineraryDTO.getTitle());
            itinerary.setDescription(itineraryDTO.getDescription());
            itinerary.setLocation(itineraryDTO.getLocation());
            itinerary.setDurationDays(itineraryDTO.getDurationDays());
            itinerary.setPrice(itineraryDTO.getPrice());
            itinerary.setStartDate(itineraryDTO.getStartDate());
            itinerary.setEndDate(itineraryDTO.getEndDate());
            return itineraryRepository.save(itinerary);
        } else {
            throw new RuntimeException("Itinerary not found with ID: " + id);
        }
    }

    public void deleteItinerary(Long id) {
        if (itineraryRepository.existsById(id)) {
            itineraryRepository.deleteById(id);
        } else {
            throw new RuntimeException("Itinerary not found with ID: " + id);
        }
    }
    public ItineraryDTO getItineraryById(Long id) {
        Optional<Itinerary> itinerary = itineraryRepository.findById(id);
        return itinerary.map(this::convertToDTO).orElseThrow(() -> new RuntimeException("Itinerary not found"));
    }

    public ItineraryDTO getItineraryByTitle(String title) {
        Optional<Itinerary> itinerary = itineraryRepository.findByTitle(title);
        return itinerary.map(this::convertToDTO).orElseThrow(() -> new RuntimeException("Itinerary not found"));
    }
    private ItineraryDTO convertToDTO(Itinerary itinerary) {
        ItineraryDTO dto = new ItineraryDTO();
        dto.setId(itinerary.getId());
        dto.setTitle(itinerary.getTitle());
        dto.setLocation(itinerary.getLocation());
        dto.setDurationDays(itinerary.getDurationDays());
        dto.setPrice(itinerary.getPrice());
        dto.setDescription(itinerary.getDescription());
        dto.setStartDate(itinerary.getStartDate());
        dto.setEndDate(itinerary.getEndDate());
        return dto;
    }
}
