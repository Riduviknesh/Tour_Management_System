import React, { useEffect, useState } from "react";
import UserService from "../../service/UserService";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function UserViewTours() {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);

  // Fetch all tours on component mount
  useEffect(() => {
    UserService.getAllTours()
      .then((res) => {
        setTours(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch tours:", error);
        toast.error("Failed to load tours. Please try again later.");
      });
  }, []);

  // Function to handle booking a tour
  const handleBookTour = (tourId) => {
    const bookingDTO = {
      itineraryId: tourId,
      bookingDate: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
    };

    UserService.createBooking(bookingDTO)
      .then((res) => {
        toast.success("Tour booked successfully!");
        navigate("/user/booked-tours"); // Redirect to the booked tours page
      })
      .catch((error) => {
        console.error("Failed to book tour:", error);
        toast.error("Failed to book tour. Please try again.");
      });
  };

  return (
    <div className="userViewToursPage">
      <div className="tourGrid">
        {tours.map((tour, i) => (
          <Card className="tourElement" key={i}>
            {/* Tour Image */}
            <div className="tourImageContainer">
              <img src="/images/8.jpg" alt={tour.title} className="tourImage" />
            </div>
            <Card.Body>
              <Card.Title>{tour.title}</Card.Title>
              <Card.Text>{tour.description}</Card.Text>
              <Card.Text>Location: {tour.location}</Card.Text>
              <Card.Text>Duration: {tour.durationDays} days</Card.Text>
              <Card.Text>Price: ${tour.price}</Card.Text>
              <Card.Text>
                Dates: {tour.startDate} to {tour.endDate}
              </Card.Text>
              <Button onClick={() => handleBookTour(tour.id)}>Book Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}