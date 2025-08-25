import express from "express";
import { OrderController } from "./Controller/orderController.js";
export class OrderRouter {
  constructor(private controller: OrderController) {}

  getRouter() {
    const orderRouter = express.Router();

    orderRouter.route("/getOrder").get(this.controller.addOrder);

    return orderRouter;
  }
}
