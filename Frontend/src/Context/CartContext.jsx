import React, { createContext, useContext, useState, useEffect } from "react";
import { deleteCartApi, getCartApi, updateCartApi } from "../API/Web/cartApi";
import {
  Toastifyerror,
  Toastitysuccess,
} from "../Component/Notification/Toastitynotificaition";
import axios from "axios";

const CartContext = createContext();

const BASE_URL = "http://localhost:8080/base/auth/cart/addtocart";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });

  // Featch Cart Data
  const fetchCart = async () => {
    try {
      const res = await getCartApi();
      setCart(res.data || { items: [], total_price: 0 });
    } catch (error) {
      if (error.response?.status !== 401) {
        console.log("Cart Error", error);
      }
    }
  };

  // Add to cart
  const addToCart = async (productid, quantity = 1) => {
    const response = await axios.post(
      BASE_URL,
      { productid, quantity },
      { withCredentials: true }
    );
    await fetchCart();
    return response;
  };

  // Delete item
  const deleteItem = async (id) => {
    try {
      const res = await deleteCartApi(id);
      Toastitysuccess("Products Deleted");
      await fetchCart();
      return res;
    } catch (error) {
      Toastifyerror(error);
    }
  };

  // Increment Item
  const incrementItem = (id) => {
    setCart((prev) => {
      const updatedItems = prev.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      const updatedItem = updatedItems.find((item) => item.id === id);
      updateCartApi(id, updatedItem.quantity).catch((error) =>
        Toastifyerror(error)
      );

      return { ...prev, items: updatedItems };
    });
  };

  // Decrement Item
  const decrementItem = (id) => {
    setCart((prev) => {
      const updatedItems = prev.items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      const updatedItem = updatedItems.find((item) => item.id === id);

      if (updatedItem) {
        updateCartApi(id, updatedItem.quantity).catch((error) =>
          Toastifyerror(error)
        );
      }

      return { ...prev, items: updatedItems };
    });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, incrementItem, decrementItem, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
