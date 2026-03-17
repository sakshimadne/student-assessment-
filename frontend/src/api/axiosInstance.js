import axios from "axios";

const API = axios.create({
  baseURL: "https://student-assessment-5xux.onrender.com/api",
});

// attach token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;