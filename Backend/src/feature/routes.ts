import express from "express";
import ProductRouter from "./Product/index.js";

const featureRouer = express.Router();

featureRouer.use("/web", ProductRouter);

export default featureRouer;
