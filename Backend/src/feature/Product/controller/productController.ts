import { Request, Response } from "express";
import { StatusCodes } from "../../../utils/config/constants.js";
import { ProductService } from "../Service/productService.js";

class ProductController {
  constructor(private service: ProductService) {}

  getProduct = async (req: Request, res: Response) => {
    try {
      const result = await this.service.getProductServices()
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  createProduct = async (req: Request, res: Response) => {
    try {
      const { name, price, category, quantity, rate } = req.body;
      const result = await this.service.createProductService(
        name,
        price,
        category,
        quantity,
        rate
      );
      return res
        .status(StatusCodes.CREATED)
        .json({ message: "Product Created Successfully", data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
export default ProductController;
