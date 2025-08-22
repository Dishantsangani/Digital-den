import express from "express";
import featureRouer from "./feature/routes.js";

const baseRouter = express.Router();

baseRouter.use("/base", featureRouer);

export default baseRouter;
