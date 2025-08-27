import { AuthRequest } from "./../../utils/Schema/tokenInterface.js";
import { Response } from "express";
import { CartServices } from "../Services/cartServices.js";
import { StatusCodes } from "../../../utils/config/constants.js";

export class CartController {
  constructor(private services: CartServices) {}

  addToCart = async (req: AuthRequest, res: Response) => {
    try {
      const userid = Number(req.user?.user_id);
      const { productid, quantity } = req.body;

      const cart = await this.services.addToCartServices(
        productid,
        quantity,
        userid
      );

      return res.status(StatusCodes.CREATED).json({ data: cart });
    } catch (error: any) {
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
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  };
}
