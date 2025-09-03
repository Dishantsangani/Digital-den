import axios from "axios";

const BASE_URL = `http://localhost:8080/base`;

export const handlePaymentApi = (items) => {
  return axios.post(`${BASE_URL}/create-checkout-session`, { items });
};
