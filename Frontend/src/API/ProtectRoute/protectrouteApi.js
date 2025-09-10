import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";
const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base`;

export const protectRouteApi = () => {
  try {
    return axios.get(`${BASE_URL}/verify-token`, {
      withCredentials: true,
    });
  } catch (error) {
    Toastifyerror(error);
  }
};
