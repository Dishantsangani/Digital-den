import axios from "axios";

const BASE_URL = `http://localhost:8080/base/payment`;

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
