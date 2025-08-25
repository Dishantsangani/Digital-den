import express from "express";
import { DashboardController } from "./Controller/dashboardConroller.js";

export class DashboardRouter {
  constructor(private controller: DashboardController) {}
  getRouter() {
    const dashboardRouter = express.Router();

    dashboardRouter
      .route("/getalldashboard")
      .get(this.controller.getAllProduct);

    return dashboardRouter;
  }
}
