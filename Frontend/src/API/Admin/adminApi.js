import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const API_URL = `http://localhost:8080/base/web`;
const DASHBOAD_API = `http://localhost:8080/base`;

export const getProductDataApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/getproduct`);
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const deleteProductDataApi = (id) =>
  axios.delete(`${API_URL}/deleteproduct/${id}`);

export const addProductApi = (fd) => {
  try {
    axios.post(`${API_URL}/createproduct`, fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    Toastifyerror(error);
  }
};

export const GetDashboardData = async () => {
  try {
    const response = await axios.get(
      `${DASHBOAD_API}/dashboard/getalldashboard`
    );
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};
