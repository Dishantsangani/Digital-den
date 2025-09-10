import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base/checkout`;

export const addcheckoutApi = (formdata) => {
  return axios.post(`${BASE_URL}/finalcheckout`, formdata, {
    withCredentials: true,
  });
};

export const getcheckoutApi = async () => {
  const response = await axios.get(`${BASE_URL}/getcheckout`, {
    withCredentials: true,
  });
  return response.data;
};
