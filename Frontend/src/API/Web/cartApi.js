import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base/auth/cart`;

export const getCartApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getcart`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const deleteCartApi = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/deletecart/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const updateCartApi = async (id, quantity) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/updatecart/${id}`,
      { quantity },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};
