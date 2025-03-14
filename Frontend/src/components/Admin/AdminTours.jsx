import React, { useEffect, useState } from "react";
import UserService from "../../service/UserService";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function AdminTours() {
  let navigate = useNavigate();
  let [tours, setTours] = useState([]);

  useEffect(() => {
    UserService.getAllTours().then((res) => {
      setTours(res.data);
      console.log(res.data)
    });
  }, []);

  const deleteTour = (id) => {
    console.log(id)
    UserService.deleteTour(id)
      .then((res) => {
        setTours(tours.filter((tour) => tour.id !== id)); // Update the state
        console.log("Tour deleted successfully");
        toast.success("Tour Deleted Successfully!")
      })
      .catch((error) => {
        console.error("Failed to delete tour:", error);
        // Optionally, show a toast or alert to the user
      
      });
  };

  return (
    <div className="adminToursPage">
      <div className="tourGrid">
        {tours.map((tour, i) => (
          <Card className="tourElement" key={i}>
            {/* Tour Image */}
            <div className="tourImageContainer">
              <img src="/images/8.jpg"  alt={tour.title} className="tourImage" />
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
              <ButtonGroup>
                <Button onClick={() => navigate(`/admin/adminTours/updateTours/${tour.id}`)}>
                  Edit
                </Button>
                <Button onClick={() => deleteTour(tour.id)}>Delete</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
