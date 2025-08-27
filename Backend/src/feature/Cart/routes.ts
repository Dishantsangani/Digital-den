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

    return cartRouter;
  }
}
