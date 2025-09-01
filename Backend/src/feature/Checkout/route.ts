import express from "express";
import { CheckoutController } from "./controller/checkoutController.js";
import { authMiddleware } from "../utils/Middleware/authMiddleware.js";

export class CheckoutRouter {
  constructor(private controller: CheckoutController) {}

  getRouter() {
    const checkoutrouter = express.Router();

    checkoutrouter
      .route("/finalcheckout")
      .post(authMiddleware, this.controller.checkoutcontroller);

    checkoutrouter
      .route("/getcheckout")
      .get(authMiddleware, this.controller.getcheckoutcontroller);

    return checkoutrouter;
  }
}
