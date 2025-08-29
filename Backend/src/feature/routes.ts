import express from "express";
import ProductRouter from "./Product/index.js";
import DashboardRouter from "./dashboard/index.js";
import OrderRouter from "./Order/index.js";
import AuthRouter from "./Auth/index.js";
import CartRouter from "./Cart/index.js";
import contactRouter from "./Contact/index.js";

const featureRouer = express.Router();

featureRouer.use("/web", ProductRouter);
featureRouer.use("/dashboard", DashboardRouter);
featureRouer.use("/order", OrderRouter);
featureRouer.use("/auth", AuthRouter);
featureRouer.use("/auth/cart", CartRouter);
featureRouer.use("/contact", contactRouter);

export default featureRouer;
