import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

// const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base/web`;

const BASE_URL = `https://digital-den-n5yv.onrender.com/base/web`;

export const getProductWebApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getproduct`);
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};
