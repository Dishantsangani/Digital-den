import axios from "axios";

const BASE_URL = "http://localhost:8080/base/client";

export const getOrderClientApi = async (sessionId) => {
  const response = await axios.get(`${BASE_URL}/getclientorder`, sessionId);
  return response.data;
};
