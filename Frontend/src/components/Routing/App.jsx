import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import HomePage from '../Home Page/Homepage.jsx';
import Login from "../Auth/Login Page/Login.jsx";
import Signup from "../Auth/Signup Page/Signup.jsx";
import AdminNavigationBar from '../Admin/AdminNavigationBar/AdminNavigationBar.jsx';
import AdminAddTours from '../Admin/AdminAddTours.jsx';
import AdminUpdateTours from '../Admin/AdminUpdateTours.jsx';
import AdminTours from '../Admin/AdminTours.jsx';
import UserNavigationBar from '../User/UserNavigationBar/UserNavigationBar.jsx';
import UserViewTours from '../User/UserViewTours.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import BookedTours from "../User/BookedTours.jsx"

function App() {
  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("authStatus") === "true";
    const checkAdmin = localStorage.getItem("admin") === "true";
    const checkUser = localStorage.getItem("user") === "true";

    setAuth(authStatus);
    setAdmin(checkAdmin);
    setUser(checkUser);
  }, []);

  useEffect(() => {
    console.log("Auth:", auth);
    console.log("Admin:", admin);
    console.log("User:", user);
  }, [auth, admin, user]);

  useEffect(() => {
    localStorage.setItem("authStatus", auth);
    if (!auth) {
      localStorage.removeItem("admin");
      localStorage.removeItem("user");
    }
  }, [auth]);

  const authenticate = () => {
    const authStatus = localStorage.getItem("authStatus") === "true";
    const checkAdmin = localStorage.getItem("admin") === "true";
    const checkUser = localStorage.getItem("user") === "true";

    setAuth(authStatus);
    setAdmin(checkAdmin);
    setUser(checkUser);
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        {!auth ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login authenticate={authenticate} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : null}

        {/* Admin Routes */}
        {auth && admin && (
          <Route path="/admin" element={<AdminNavigationBar logout={() => setAuth(false)} />}>
            <Route index element={<Navigate to="/admin/adminTours" replace />} />
            <Route path="adminTours" element={<AdminTours />} />
            <Route path="adminTours/adminAddTours" element={<AdminAddTours />} />
            <Route path="adminTours/updateTours/:tourId" element={<AdminUpdateTours />} />
          </Route>
        )}

        {/* User Routes */}
        {auth && user && (
          <Route path="/user" element={<UserNavigationBar logout={() => setAuth(false)} />}>
            <Route index element={<Navigate to="/user/UserViewTours" replace />} />
            <Route path="UserViewTours" element={<UserViewTours />} />
            <Route path="booked-tours" element={<BookedTours />} />
          </Route>
        )}

        {/* Fallback Route */}
        {/* <Route path="*" element={<AdminNavigationBar logout={() => setAuth(false)} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;