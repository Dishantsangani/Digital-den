import express from "express";
import ProductController from "./controller/productController.js";
import { upload } from "./utils/upload.js";
import { authMiddleware } from "../utils/Middleware/authMiddleware.js";

class ProductRouter {
  constructor(private controller: ProductController) {}
  getRouter() {
    const productrouter = express.Router();

    productrouter.route("/getproduct").get(this.controller.getProduct);

    productrouter
      .route("/createproduct")
      .post(
        upload.single("productImage"),
        authMiddleware,
        this.controller.createProduct
      );

    productrouter
      .route("/deleteproduct/:id")
      .delete(authMiddleware, this.controller.deleteProduct);

    productrouter
      .route("/restockproduct")
      .patch(authMiddleware, this.controller.restockProduct);

    return productrouter;
  }
}

export default ProductRouter;
