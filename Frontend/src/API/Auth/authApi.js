import axios from "axios";

const AUTH_URL = "http://localhost:8080/base/auth";

export const signinApi = (formdata) => {
  return axios.post(`${AUTH_URL}/signin`, formdata, {
    withCredentials: true,
  });
};

export const signupApi = (formdata) => {
  return axios.post(`${AUTH_URL}/signup`, formdata, {
    withCredentials: true,
  });
};

export const forgotPasswordApi = (email) => {
  return axios.post(`${AUTH_URL}/forgot-password`, { email });
};

export const SetPasswordApi = (token, password) => {
  return axios.post(
    `${AUTH_URL}/set-password`,
    { token, password },
    { withCredentials: true }
  );
};
