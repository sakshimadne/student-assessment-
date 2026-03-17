import API from "./axiosInstance";

// REGISTER
export const registerUser = async (formData) => {
  const res = await API.post("/auth/register", formData);
  return res.data;
};

// LOGIN
export const loginUser = async (formData) => {
  const res = await API.post("/auth/login", formData);
  return res.data;
};

// GET PROFILE
export const getProfile = async () => {
  const res = await API.get("/auth/profile");
  return res.data;
};