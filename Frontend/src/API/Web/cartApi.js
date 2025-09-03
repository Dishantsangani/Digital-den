import axios from "axios";

const BASE_URL = "http://localhost:8080/base/auth/cart";

export const getCart = () =>
  axios.get(`${BASE_URL}/getcart`, { withCredentials: true });

export const addToCartApi = (productid) =>
  axios.post(
    `${BASE_URL}/addtocart`,
    { productid, quantity: 1 },
    { withCredentials: true }
  );

export const updateCartApi = (id, quantity) =>
  axios.put(
    `${BASE_URL}/updatecart/${id}`,
    { quantity },
    { withCredentials: true }
  );

export const deleteCartApi = (id) =>
  axios.delete(`${BASE_URL}/deletecart/${id}`, { withCredentials: true });

export const incrementItemApi = (id, quantity) => {
  return axios.put(
    `${BASE_URL}/updatecart/${id}`,
    { quantity },
    { withCredentials: true }
  );
};

export const decrementItemApi = (id, quantity) => {
  return axios.put(
    `${BASE_URL}/updatecart/${id}`,
    { quantity },
    { withCredentials: true }
  );
};
