import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const BASE_URL = `http://localhost:8080/base/customer`;

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
