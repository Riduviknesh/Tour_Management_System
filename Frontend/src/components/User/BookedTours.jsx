import React, { useEffect, useState } from "react";
import UserService from "../../service/UserService";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";

export default function BookedTours() {
  const [bookings, setBookings] = useState([]);

  // Fetch user's booked tours on component mount
  useEffect(() => {
    UserService.getUserBookings()
      .then((res) => {
        setBookings(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch bookings:", error);
        toast.error("Failed to load bookings. Please try again later.");
      });
  }, []);

  return (
    <div className="bookedToursPage">
      <h2>Your Booked Tours</h2>
      <div className="tourGrid">
        {bookings.map((booking, i) => (
          <Card className="tourElement" key={i}>
            <Card.Body>
              <Card.Title>{booking.itinerary.title}</Card.Title>
              <Card.Text>{booking.itinerary.description}</Card.Text>
              <Card.Text>Location: {booking.itinerary.location}</Card.Text>
              <Card.Text>Duration: {booking.itinerary.durationDays} days</Card.Text>
              <Card.Text>Price: ${booking.itinerary.price}</Card.Text>
              <Card.Text>
                Dates: {booking.itinerary.startDate} to {booking.itinerary.endDate}
              </Card.Text>
              <Card.Text>Booking Date: {booking.bookingDate}</Card.Text>
              <Card.Text>Status: {booking.status}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}