import express, { Request, Response } from "express";

// Web
import AuthRouter from "./Auth/index.js";
import Checkout from "./Checkout/index.js";
import clientorderrouter from "./Order/index.js";
import adminauthrouter from "./Admin/Auth/index.js";
import paymentRouter from "./Payment/index.js";

// Admin
import ProductRouter from "./Product/index.js";
import DashboardRouter from "./Admin/dashboard/index.js";
import OrderRouter from "./Admin/Order/index.js";
import CartRouter from "./Cart/index.js";
import contactRouter from "./Admin/Contact/index.js";
import Customer from "./Admin/Customer/index.js";

// Middleware
import { authMiddleware } from "./utils/Middleware/authMiddleware.js";

// Utils
import { downloadInvoice } from "./utils/invoice/invoice.controller.js";

const featureRouer = express.Router();

// Web
featureRouer.use("/auth", AuthRouter);
featureRouer.use("/checkout", Checkout);
featureRouer.use("/client", clientorderrouter);
featureRouer.use("/auth/admin", adminauthrouter);
featureRouer.use("/payment", paymentRouter);

// Admin
featureRouer.use("/web", ProductRouter);
featureRouer.use("/dashboard", authMiddleware, DashboardRouter);
featureRouer.use("/order", authMiddleware, OrderRouter);
featureRouer.use("/auth/cart", authMiddleware, CartRouter);
featureRouer.use("/contact", authMiddleware, contactRouter);
featureRouer.use("/customer", authMiddleware, Customer);

// Utils
featureRouer.post("/download-invoice", downloadInvoice);

// Route Protect
featureRouer.get(
  "/verify-token",
  authMiddleware,
  (req: Request, res: Response) => {
    res.status(200).json({ message: "Authenticated" });
  }
);
export default featureRouer;
