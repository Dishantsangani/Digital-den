import express from "express";
import { CustomerController } from "./Controller/customerController";

export class CustomerRouter {
  constructor(private controller: CustomerController) {}
  getRouter() {
    const customerRouter = express.Router();

    customerRouter
      .route("/totalcustomer")
      .get(this.controller.customerController);

    return customerRouter;
  }
}
