import axios from "axios";

const API_URL = "http://localhost:5000";

export const loginUser = (data) => {
  return axios.post(`${API_URL}/login`, data);
};

export const registerUser = (data) => {
  return axios.post(`${API_URL}/register`, data);
};

export const forgotPassword = (data) => {
  return axios.post(`${API_URL}/forgot-password`, data);
};