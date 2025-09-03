import axios from "axios";

const BASE_URL = "http://localhost:8080/base/client";

export const getOrderClientApi = async () => {
  const response = await axios.get(`${BASE_URL}/getclientorder`);
  return response.data;
};
