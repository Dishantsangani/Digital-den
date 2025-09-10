import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base`;

export const getOrderApi = async () => {
  const resonse = await axios.get(`${BASE_URL}/order/getorder`, {
    withCredentials: true,
  });
  return resonse.data;
};
