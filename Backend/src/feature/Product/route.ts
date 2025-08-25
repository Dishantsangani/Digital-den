import express from "express";
import ProductController from "./controller/productController.js";
import { upload } from "./utils/upload.js";

class ProductRouter {
  constructor(private controller: ProductController) {}
  getRouter() {
    const productrouter = express.Router();

    productrouter.route("/getproduct").get(this.controller.getProduct);

    productrouter
      .route("/createproduct")
      .post(upload.single("productImage"), this.controller.createProduct);

    productrouter
      .route("/deleteproduct/:id")
      .delete(this.controller.deleteProduct);

    return productrouter;
  }
}

export default ProductRouter;
