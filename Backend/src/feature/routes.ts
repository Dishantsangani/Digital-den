import express from "express";
import ProductRouter from "./Product/index.js";
import DashboardRouter from "./dashboard/index.js";

const featureRouer = express.Router();

featureRouer.use("/web", ProductRouter);
featureRouer.use("/dashboard", DashboardRouter);

export default featureRouer;
