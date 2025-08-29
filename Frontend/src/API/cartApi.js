import axios from "axios";

const API_URL = "http://localhost:8080/base/auth/cart";

export const getCart = () =>
  axios.get(`${API_URL}/getcart`, { withCredentials: true });

export const addToCartApi = (productid) =>
  axios.post(
    `${API_URL}/addtocart`,
    { productid, quantity: 1 },
    { withCredentials: true }
  );

export const updateCartApi = (id, quantity) =>
  axios.put(
    `${API_URL}/updatecart/${id}`,
    { quantity },
    { withCredentials: true }
  );

export const deleteCartApi = (id) =>
  axios.delete(`${API_URL}/deletecart/${id}`, { withCredentials: true });

export const incrementItemApi = (id, quantity) => {
  return axios.put(
    `${API_URL}/updatecart/${id}`,
    { quantity },
    { withCredentials: true }
  );
};

export const decrementItemApi = (id, quantity) => {
  return axios.put(
    `${API_URL}/updatecart/${id}`,
    { quantity },
    { withCredentials: true }
  );
};
