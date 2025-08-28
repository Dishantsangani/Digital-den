import express from "express";
import { CartController } from "./Controller/cartController.js";
import { authMiddleware } from "../utils/Middleware/authMiddleware.js";

export class CartRouter {
  constructor(private controller: CartController) {}

  getRouter() {
    const cartRouter = express.Router();

    cartRouter
      .route("/addtocart")
      .post(authMiddleware, this.controller.addToCart);

    cartRouter.route("/getcart").get(authMiddleware, this.controller.getCart);

    cartRouter
      .route("/deletecart/:id")
      .delete(authMiddleware, this.controller.deleteToCartItem);

    cartRouter
      .route("/updatecart/:id")
      .put(authMiddleware, this.controller.updateToCartItem);

    return cartRouter;
  }
}
