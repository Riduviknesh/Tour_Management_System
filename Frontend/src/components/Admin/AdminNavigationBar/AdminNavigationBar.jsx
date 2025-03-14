import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././Admin.css";

export default function AdminNavigationBar({ logout }) {
  const onLogout = () => {
    logout();
    localStorage.clear();
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="admin-nav" variant="dark">
        <Navbar.Brand>Tour Booking Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-link">

            <Link to="/admin/adminTours/adminAddTours" id="adminCourse">Add Tour</Link>
            <Link to="/admin/adminTours/updateTours" id="adminStudents">Update Tour</Link>
            <Link to="/admin/adminTours" id="userEnrolledCourse">View Tours</Link>

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
