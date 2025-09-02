import express from "express";
import ProductRouter from "./Product/index.js";
import DashboardRouter from "./Admin/dashboard/index.js";
import OrderRouter from "./Admin/Order/index.js";
import AuthRouter from "./Auth/index.js";
import CartRouter from "./Cart/index.js";
import contactRouter from "./Admin/Contact/index.js";
import Checkout from "./Checkout/index.js";
import clientorderrouter from "./Order/index.js";
import Customer from "./Admin/Customer/index.js";
import { downloadInvoice } from "./utils/invoice/invoice.controller.js";

const featureRouer = express.Router();

featureRouer.use("/web", ProductRouter);
featureRouer.use("/dashboard", DashboardRouter);
featureRouer.use("/order", OrderRouter);
featureRouer.use("/auth", AuthRouter);
featureRouer.use("/auth/cart", CartRouter);
featureRouer.use("/contact", contactRouter);
featureRouer.use("/checkout", Checkout);
featureRouer.use("/customer", Customer);
featureRouer.use("/client", clientorderrouter);
featureRouer.get("/download-invoice", downloadInvoice);

export default featureRouer;
