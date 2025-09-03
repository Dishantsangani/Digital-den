import express from "express";
import { DashboardController } from "./Controller/dashboardConroller.js";

export class DashboardRouter {
  constructor(private controller: DashboardController) {}
  getRouter() {
    const dashboardRouter = express.Router();

    dashboardRouter
      .route("/getalldashboard")
      .get(this.controller.getAllProduct);

    dashboardRouter
      .route("/totalsalesmonths")
      .get(this.controller.totalSalesMonthsProduct);

    dashboardRouter
      .route("/mostsalesproduct")
      .get(this.controller.mostSalesProduct);

    dashboardRouter
      .route("/salesbycategory")
      .get(this.controller.salesByCategory);

    dashboardRouter.route("/grothdecline").get(this.controller.growthDecline);

    return dashboardRouter;
  }
}
