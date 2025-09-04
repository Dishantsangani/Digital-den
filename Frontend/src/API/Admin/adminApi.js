import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const BASE_URL = `http://localhost:8080/base/web`;

export const getProductDataApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getproduct`);
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const deleteProductDataApi = (id) =>
  axios.delete(`${BASE_URL}/deleteproduct/${id}`);

export const addProductApi = (fd) => {
  try {
    axios.post(`${BASE_URL}/createproduct`, fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    Toastifyerror(error);
  }
};

export const restockProductApi = async (items) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/restockproduct`,
      { items }, // wrap array under "items"
      { withCredentials: true }
    );
    return response.data.data; // assuming backend returns { data: [...] }
  } catch (error) {
    console.error(error);
    Toastifyerror(error);
    throw error;
  }
};
