import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base/customer`;

export const getCustomerApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/totalcustomer`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};
