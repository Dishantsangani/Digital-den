import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const BASE_URL = "http://localhost:8080/base";

export const generateInvoiceApi = async (orderData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/download-invoice`,
      orderData,
      {
        responseType: "blob",
      }
    );
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};
