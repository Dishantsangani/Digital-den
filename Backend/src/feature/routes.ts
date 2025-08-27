import express from "express";
import ProductRouter from "./Product/index.js";
import DashboardRouter from "./dashboard/index.js";
import OrderRouter from "./Order/index.js";
import AuthRouter from "./Auth/index.js";
import CartRouter from "./Cart/index.js";

const featureRouer = express.Router();

featureRouer.use("/web", ProductRouter);
featureRouer.use("/dashboard", DashboardRouter);
featureRouer.use("/order", OrderRouter);
featureRouer.use("/auth", AuthRouter);
featureRouer.use("/auth/cart", CartRouter);

export default featureRouer;
