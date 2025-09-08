import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const BASE_URL = "http://localhost:8080/base/web";

export const getProductWebApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getproduct`);
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};
