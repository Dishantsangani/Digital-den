import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const BASE_URL = `http://localhost:8080/base/web`;

export const getProductDataApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getproduct`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const deleteProductDataApi = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/deleteproduct/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const addProductApi = (fd) => {
  try {
    axios.post(`${BASE_URL}/createproduct`, fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
  } catch (error) {
    Toastifyerror(error);
  }
};

export const restockProductApi = async (restockItems) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/restockproduct`,
      { items: restockItems },
      { withCredentials: true }
    );
    return response.data.data;
  } catch (error) {
    Toastifyerror(error);
  }
};
