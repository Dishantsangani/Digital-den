import axios from "axios";

const BASE_URL = "http://localhost:8080/base/contact";

export const contactApi = (formdata) => {
  return axios.post(`${BASE_URL}/addinquery`, formdata, {
    withCredentials: true,
  });
};
