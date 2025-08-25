import express from "express";
import ProductRouter from "./Product/index.js";
import DashboardRouter from "./dashboard/index.js";
import OrderRouter from "./Order/index.js";

const featureRouer = express.Router();

featureRouer.use("/web", ProductRouter);
featureRouer.use("/dashboard", DashboardRouter);
featureRouer.use("/order", OrderRouter);

export default featureRouer;
