import express from "express";
import ProductController from "./controller/productController.js";

class ProductRouter {
  constructor(private controller: ProductController) {}
  getRouter() {
    const productrouter = express.Router();

    productrouter.route("/getproduct").get(this.controller.getProduct);
    productrouter.route("/createproduct").post(this.controller.createProduct);

    return productrouter;
  }
}

export default ProductRouter;
