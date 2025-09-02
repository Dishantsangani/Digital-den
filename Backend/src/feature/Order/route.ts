import express from "express";
import { ClientOrderController } from "./Controller/clientOrderController.js";

export class ClientOrderRouter {
  constructor(private controller: ClientOrderController) {}

  getRouter() {
    const clientorderrouter = express.Router();

    clientorderrouter
      .route("/getclientorder")
      .get(this.controller.clientordercontroller);

    return clientorderrouter;
  }
}
