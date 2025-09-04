import { AuthRequest } from "./../../utils/Schema/tokenInterface.js";
import { Request, Response } from "express";
import { CartServices } from "../Services/cartServices.js";
import { StatusCodes } from "../../../utils/config/constants.js";
import logger from "../../../utils/Logger/index.js";

export class CartController {
  constructor(private services: CartServices) {}

  addToCart = async (req: AuthRequest, res: Response) => {
    try {
      const userid = Number(req.user?.user_id);
      const { productid, quantity } = req.body;

      const result = await this.services.addToCartServices(
        productid,
        quantity,
        userid
      );

      return res.status(StatusCodes.CREATED).json({ data: result });
    } catch (error: any) {
      logger.error("Add To cart Error", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  getCart = async (req: AuthRequest, res: Response) => {
    try {
      const userId = Number(req.user.user_id);

      const result = await this.services.getUserCartServices(userId);

      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      logger.error("Get Cart Error", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  };

  deleteToCartItem = async (req: Request, res: Response) => {
    try {
      const itemId = parseInt(req.params.id);
      const result = await this.services.deleteToCartItem(itemId);
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      logger.error("Delete Cart Error", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  updateToCartItem = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const { quantity } = req.body;
      const result = await this.services.updateCartItemServices(id, quantity);
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      logger.error("Update Cart Error", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
