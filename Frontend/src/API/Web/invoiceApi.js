import axios from "axios";

const BASE_URL = "http://localhost:8080/base";

export const generateInvoiceApi = async () => {
  const response = await axios.get(`${BASE_URL}/download-invoice`, {
    responseType: "blob",
  });
  return response.data;
};
