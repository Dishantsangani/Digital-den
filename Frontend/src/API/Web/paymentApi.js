import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base/payment`;

export const handlePaymentApi = (items, orderData) => {
  return axios.post(
    `${BASE_URL}/stripepayment`,
    {
      items,
      orderData,
    },
    { withCredentials: true }
  );
};
