import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base/client`;

export const getOrderClientApi = async (sessionId) => {
  const response = await axios.get(`${BASE_URL}/getclientorder`, sessionId);
  return response.data;
};
