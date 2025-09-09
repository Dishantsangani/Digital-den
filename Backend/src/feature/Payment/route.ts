import express from "express";
import { authMiddleware } from "../utils/Middleware/authMiddleware.js";
import { PaymentController } from "./Controller/PaymentController.js";

export class PaymentRouter {
  constructor(private session: PaymentController) {}
  getRouter() {
    const paymentRouter = express.Router();

    paymentRouter
      .route("/stripepayment")
      .post(authMiddleware, this.session.StripePaymentController);

    paymentRouter
      .route("/paymentstatus")
      .get(authMiddleware, this.session.SuccessPaymentController);

    return paymentRouter;
  }
}
