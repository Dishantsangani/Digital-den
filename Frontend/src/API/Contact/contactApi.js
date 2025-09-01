import axios from "axios";

const BASE_URL = "http://localhost:8080/base/contact";

export const contactApi = (formdata) => {
  return axios.post(`${BASE_URL}/addinquery`, formdata, {
    withCredentials: true,
  });
};

export const getcontactApi = async () => {
  const response = await axios.get(`${BASE_URL}/getinquery`, {
    withCredentials: true,
  });
  return response.data;
};
