package com.example.tourbooking.dto;

import java.time.LocalDate;
import lombok.Data;
@Data
public class BookingDTO {
    private Long itineraryId;
    private LocalDate bookingDate;
	public Long getItineraryId() {
		return itineraryId;
	}
	public void setItineraryId(Long itineraryId) {
		this.itineraryId = itineraryId;
	}
	public LocalDate getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}

    // Getters and Setters
}
