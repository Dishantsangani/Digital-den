import axios from "axios";

const BASE_URL = `http://localhost:8080/base`;

export const getOrderApi = async () => {
  const resonse = await axios.get(`${BASE_URL}/order/getorder`, {
    withCredentials: true,
  });
  return resonse.data;
};
