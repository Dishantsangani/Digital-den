import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base/contact`;

export const contactApi = (formdata) => {
  return axios.post(`${BASE_URL}/addinquery`, formdata, {
    withCredentials: true,
  });
};
