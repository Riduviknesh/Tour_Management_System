import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "../Auth.css";
import UserService from "../../../service/UserService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      emailId: "",
      username: "",
      mobile: "", 
      password: "",
      passwordConfirmation: "",
      role: "user",
    },
    validationSchema: Yup.object({
      emailId: Yup.string()
        .email("Invalid email address")
        .required("Email Id is Required"),
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("User name is Required"),
      mobile: Yup.string() 
        .required("Mobile number is Required")
        .max(10, "Mobile number not greater than 10")
        .matches(/[0-9]{10}/, "Mobile Number contain only 10 digits."),
      password: Yup.string()
        .required("Password is Required")
        .min(8, "Password is too short !"),
      passwordConfirmation: Yup.string()
        .required("Confirm Password is Required")
        .oneOf([Yup.ref("password"), null], "Passwords not match !"),
    }),
    onSubmit: (values) => {
      UserService.checkUserMailId(values.emailId).then((res) => {
        if (res.data) {
          toast.warn("Email Id already taken !");
        } else {
          UserService.checkUserName(values.username).then((res) => {
            if (res.data) {
              toast.warn("User Name already taken !");
            } else {
              toast.success("Creating Account...");
              UserService.createUser(values).then((res) => {
                toast.success("Registration success...");
                navigate("/login");
              });
            }
          });
        }
      });
    },
  });
  return (
    <div className="signup">
      <div className="signup-heading">
        <div className="signup-grid">
          <div className="signup-left">
            <h1 className="welcome">Tour Management System</h1>
            <div className="signupImgDiv">
              <img
                className="signup-img"
                src="\images/8.jpg"
                alt="signup img"
              />
            </div>
          </div>
          <div className="signup-right">
            <h1 className="signup-h">SignUp</h1>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="email">Email ID</label>
                <input
                  id="emailId"
                  name="emailId"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailId}
                />
                {formik.touched.emailId && formik.errors.emailId ? (
                  <div className="error">{formik.errors.emailId}</div>
                ) : null}
              </div>
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
                {formik.touched.username && formik.errors.username ? (
                  <div className="error">{formik.errors.username}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  id="mobile"
                  name="mobile" 
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile} 
                />
                {formik.touched.mobile && formik.errors.mobile ? ( 
                  <div className="error">{formik.errors.mobile}</div> 
                ) : null}
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
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="passwordConfirmation">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="passwordConfirmation"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirmation}
                />
                {formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation ? (
                  <div className="error">
                    {formik.errors.passwordConfirmation}
                  </div>
                ) : null}
              </div>
              <div className="signup-text">
                Already a User? <Link to="/login">Login</Link>{" "}
              </div>
              <div>
                <button id="submitButton" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}