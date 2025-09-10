import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base/auth/admin`;

export const adminsigninAPI = async (formdata) => {
  try {
    const response = await axios.post(`${BASE_URL}/signin`, formdata, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const adminlogoutApi = async () => {
  try {
    return await axios.post(
      `${BASE_URL}/logout`,
      {},
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    Toastifyerror(error);
  }
};
