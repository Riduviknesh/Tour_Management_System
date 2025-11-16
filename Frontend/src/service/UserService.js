import axios from "axios";

//const REST_API_URL = "https://tour-management-system-494l.onrender.com";
const REST_API_URL = "http://localhost:8081";

// Axios interceptor to include the Bearer Token in every request
axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

class UserService {
  // Login and SignUp
  createUser(user) {
    return axios.post(REST_API_URL + "/auth/register", user);
  }

  authenticateUser(userDetails) {
    return axios.post(REST_API_URL + "/auth/authenticate", userDetails);
  }

  login(userName, password) {
    return axios.post(REST_API_URL + "/auth/login", null, {
      params: {
        username: userName, // Query parameter for username
        password: password, // Query parameter for password
      },
    });
  }

  checkUserMailId(email) {
    return axios.get(REST_API_URL + "/auth/checkUserMailId/" + email);
  }

  checkUserName(userName) {
    return axios.get(REST_API_URL + "/auth/checkUsername/" + userName);
  }

  // Tour-related methods
  getAllTours() {
    return axios.get(REST_API_URL + "/api/itineraries/all");
  }

  deleteTour(id) {
    return axios.delete(REST_API_URL + "/api/itineraries/delete/" + id);
  }

  addTour(values) {
    return axios.post(REST_API_URL + "/api/itineraries/add", values);
  }

  getTourById(id) {
    return axios.get(`${REST_API_URL}/api/itineraries/${id}`);
  }

  updateTour(tourId, values) {
    return axios.put(`${REST_API_URL}/api/itineraries/update/${tourId}`, values);
  }

  // Booking-related methods
  createBooking(bookingDTO) {
    return axios.post(`${REST_API_URL}/api/bookings/create`, bookingDTO);
  }

  getUserBookings() {
    return axios.get(`${REST_API_URL}/api/bookings/user`);
  }
}

export default new UserService();
