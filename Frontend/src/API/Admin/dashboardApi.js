import axios from "axios";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";

const BASE_URL = `http://localhost:8080/base/dashboard`;

export const GetDashboardData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getalldashboard`);
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const GetDashboarMostsales = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/totalsalesmonths`);
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const DailySalesGrowthApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/grothdecline`);
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const MostSalesProductApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mostsalesproduct`);
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};

export const SalesbyCategoryApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/salesbycategory`);
    return response.data;
  } catch (error) {
    Toastifyerror(error);
  }
};
