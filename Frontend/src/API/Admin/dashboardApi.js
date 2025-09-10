import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const BASE_URL = `${import.meta.env.VITE_BACKEND_PORT}/base/dashboard`;

export const GetDashboardData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getalldashboard`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const GetDashboarMostsales = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/totalsalesmonths`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const DailySalesGrowthApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/grothdecline`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const MostSalesProductApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mostsalesproduct`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const SalesbyCategoryApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/salesbycategory`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};
