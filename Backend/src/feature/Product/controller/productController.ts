import { Request, Response } from "express";
import { StatusCodes } from "../../../utils/config/constants.js";
import { ProductService } from "../Service/productService.js";

class ProductController {
  constructor(private service: ProductService) {}

  getProduct = async (req: Request, res: Response) => {
    try {
      const result = await this.service.getProductServices();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  createProduct = async (req: Request, res: Response) => {
    try {
      const {
        productname,
        price,
        category,
        stockquantity,
        taxrate,
        description,
      } = req.body;

      let productImage = null;
      if (req.file) {
        productImage = `/uploads/${req.file.filename}`;
      }

      const result = await this.service.createProductService(
        productname,
        price,
        category,
        productImage,
        stockquantity,
        taxrate,
        description
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

  deleteProduct = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);

      const result = await this.service.deleteProductService(id);

      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
export default ProductController;
