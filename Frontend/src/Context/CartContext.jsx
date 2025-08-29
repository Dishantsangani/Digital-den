import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  decrementItemApi,
  deleteCartApi,
  getCart,
  incrementItemApi,
} from "../API/cartApi";
import {
  Toastifyerror,
  Toastitysuccess,
} from "../Component/Notification/Toastitynotificaition";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });

  // get cart from server
  const fetchCart = async () => {
    try {
      const res = await getCart();
      setCart(res.data.data || { items: [], total_price: 0 });
    } catch (error) {
      if (error.response?.status !== 401) {
        Toastifyerror(error);
      }
    }
  };

  // Add to cart
  const addToCart = async (productid, quantity = 1) => {
    const res = await axios.post(
      "http://localhost:8080/base/auth/cart/addtocart",
      { productid, quantity },
      { withCredentials: true }
    );
    await fetchCart();
    return res;
  };

  // Delete item
  const deleteItem = async (id) => {
    try {
      const res = await deleteCartApi(id);
      console.log("res: ", res);
      Toastitysuccess("Products Deleted");
      await fetchCart();
    } catch (error) {
      Toastifyerror(error);
    }
  };

  const incrementItem = (id) => {
    setCart((prev) => {
      const updatedItems = prev.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      const updatedItem = updatedItems.find((item) => item.id === id);

      // Call API with correct quantity
      incrementItemApi(id, updatedItem.quantity).catch((err) =>
        Toastifyerror(err)
      );

      return { ...prev, items: updatedItems };
    });
  };

  const decrementItem = (id) => {
    setCart((prev) => {
      const updatedItems = prev.items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      const updatedItem = updatedItems.find((item) => item.id === id);

      if (updatedItem) {
        decrementItemApi(id, updatedItem.quantity).catch((err) =>
          Toastifyerror(err)
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
