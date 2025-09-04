import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";
const BASE_URL = "http://localhost:8080/base";

export const protectRouteApi = () => {
  try {
    return axios.get(`${BASE_URL}/verify-token`, {
      withCredentials: true,
    });
  } catch (error) {
    Toastifyerror(error);
  }
};
