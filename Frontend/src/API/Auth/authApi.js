import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base/auth`;

export const signinApi = (formdata) => {
  return axios.post(`${BASE_URL}/signin`, formdata, {
    withCredentials: true,
  });
};

export const signupApi = (formdata) => {
  return axios.post(`${BASE_URL}/signup`, formdata, {
    withCredentials: true,
  });
};

export const forgotPasswordApi = (email) => {
  return axios.post(`${BASE_URL}/forgot-password`, { email });
};

export const SetPasswordApi = (token, password) => {
  return axios.post(
    `${BASE_URL}/set-password`,
    { token, password },
    { withCredentials: true }
  );
};
