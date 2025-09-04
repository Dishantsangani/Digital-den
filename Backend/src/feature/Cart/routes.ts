import express from "express";
import { CartController } from "./Controller/cartController.js";

export class CartRouter {
  constructor(private controller: CartController) {}

  getRouter() {
    const cartRouter = express.Router();

    cartRouter.route("/addtocart").post(this.controller.addToCart);

    cartRouter.route("/getcart").get(this.controller.getCart);

    cartRouter
      .route("/deletecart/:id")
      .delete(this.controller.deleteToCartItem);

    cartRouter.route("/updatecart/:id").put(this.controller.updateToCartItem);

    return cartRouter;
  }
}
