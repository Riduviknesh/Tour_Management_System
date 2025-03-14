import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "../Auth.css";
import UserService from "../../../service/UserService";
import { toast } from "react-toastify";

export default function Login({ authenticate }) {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("User Name is Required"),
      password: Yup.string()
        .required("Password is Required")
        .min(8, "Password is too short!")
        .max(12, "Password should not exceed 12 characters"),
    }),
    onSubmit: async (values) => {
      try {
        localStorage.removeItem("token"); // Clear previous session

        const authResponse = await UserService.authenticateUser(values);
        localStorage.setItem("token", authResponse.data);

        const loginResponse = await UserService.login(values.username, values.password);
        const userRole = loginResponse.data.user.role;
        const userEmail = loginResponse.data.user.emailId;

        localStorage.setItem("userInformation", userEmail);
        localStorage.setItem("authStatus", "true");
        
        if (userRole === "admin") {
          localStorage.setItem("admin", "true");
          authenticate(); // Update authentication state in App.js
          localStorage.removeItem("user"); // Ensure only one role is set
          toast.success("Welcome back, Admin!");
          navigate("/admin/adminTours");
        } else {
          localStorage.setItem("user", "true");
          authenticate();
          localStorage.removeItem("admin"); // Ensure only one role is set
          toast.success("Welcome back, User!");
          navigate("/user/UserViewTours");
        }

       
      } catch (error) {
        console.error("Login error:", error);
        toast.warn("Invalid Credentials");
      }
    },
  });

  return (
    <div className="login">
      <div className="login-heading">
        <div className="login-grid">
          <div className="login-left">
            <h1 className="welcome-login">Tour Management System</h1>
            <img className="login-img" src="/images/8.jpg" alt="login img" />
          </div>
          <div className="login-right">
            <h1 className="login-h">Login</h1>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="username">User Name</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="error">{formik.errors.username}</div>
                )}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="error">{formik.errors.password}</div>
                )}
              </div>
              <div className="signup-text">
                Are you a new user? <Link to="/signup">Signup</Link>
              </div>
              <button id="loginButton" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
