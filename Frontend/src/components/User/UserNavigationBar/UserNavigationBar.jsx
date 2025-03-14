import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././User.css"; // Assuming you have a separate CSS file for user styling

export default function UserNavigationBar({ logout }) {
  const onLogout = () => {
    logout();
    localStorage.clear();
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="user-nav" variant="dark">
        <Navbar.Brand>Tour Booking User</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-link">
            <Link to="/user/tours" id="viewTours">View Tours</Link>
            <Link to="/user/booked-tours" id="bookedTours">Booked Tours</Link> {/* Link to booked tours page */}
          </Nav>
          <Nav className="navi-logout">
            <Link to="/login" id="logout" onClick={onLogout}>Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet /> {/* Renders nested routes */}
    </div>
  );
}