import express from "express";
import featureRouer from "./feature/routes.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseRouter = express.Router();

baseRouter.use("/base", featureRouer);

baseRouter.use(
  "/uploads",
  express.static(path.join(__dirname, "feature/Product/utils/uploads"))
);

export default baseRouter;
