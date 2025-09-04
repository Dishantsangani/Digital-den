import axios from "axios";

const BASE_URL = `http://localhost:8080/base/customer`;

export const getCustomerApi = async () => {
  const response = await axios.get(`${BASE_URL}/totalcustomer`, {
    withCredentials: true,
  });
  return response.data;
};
