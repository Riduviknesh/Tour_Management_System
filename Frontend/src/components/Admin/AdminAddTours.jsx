import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css"; 
import { useNavigate } from "react-router-dom";
import UserService from "../../service/UserService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminAddTours() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: "",
      durationDays: 0,
      price: 0.0,
      startDate: "",
      endDate: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, "At least 3 characters required")
        .max(50, "Maximum 50 characters allowed")
        .required("Title is required"),
      description: Yup.string()
        .min(10, "At least 10 characters required")
        .max(500, "Maximum 500 characters allowed")
        .required("Description is required"),
      location: Yup.string()
        .min(3, "At least 3 characters required")
        .max(100, "Maximum 100 characters allowed")
        .required("Location is required"),
      durationDays: Yup.number()
        .min(1, "Duration must be at least 1 day")
        .required("Duration is required"),
      price: Yup.number()
        .min(0, "Price cannot be negative")
        .required("Price is required"),
      startDate: Yup.date().required("Start date is required"),
      endDate: Yup.date().required("End date is required"),
    }),
    onSubmit: (values) => {
      UserService.addTour(values).then((res) => {
        toast.success("Tour added successfully!");
        formik.resetForm();
        navigate("/admin/adminViewTours");
      });
    },
  });

  const cancel = () => {
    navigate("/admin/adminTours");
  };

  return (
    <div className="AdminAddToursPage">
      <form onSubmit={formik.handleSubmit}>
        <div className="MainDiv">
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter tour title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <p id="error">{formik.errors.title}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter tour description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <p id="error">{formik.errors.description}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              name="location"
              placeholder="Enter tour location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            />
            {formik.touched.location && formik.errors.location ? (
              <p id="error">{formik.errors.location}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="durationDays">Duration (Days)</label>
            <input
              id="durationDays"
              type="number"
              name="durationDays"
              placeholder="Enter duration in days"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.durationDays}
            />
            {formik.touched.durationDays && formik.errors.durationDays ? (
              <p id="error">{formik.errors.durationDays}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              name="price"
              placeholder="Enter tour price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <p id="error">{formik.errors.price}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.startDate}
            />
            {formik.touched.startDate && formik.errors.startDate ? (
              <p id="error">{formik.errors.startDate}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="endDate">End Date</label>
            <input
              id="endDate"
              type="date"
              name="endDate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.endDate}
            />
            {formik.touched.endDate && formik.errors.endDate ? (
              <p id="error">{formik.errors.endDate}</p>
            ) : null}
          </div>

          <div>
            <button id="cancel" onClick={() => cancel()}>
              Cancel
            </button>
            <button id="addTour" type="submit">
              Add Tour
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}