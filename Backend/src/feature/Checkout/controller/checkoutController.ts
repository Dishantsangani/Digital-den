import { Request, Response } from "express";
import { CheckoutServices } from "../Service/checkoutServices.js";
import { StatusCodes } from "../../../utils/config/constants.js";
import { AuthRequest } from "../../utils/Schema/tokenInterface.js";
import logger from "../../../utils/Logger/index.js";

export class CheckoutController {
  constructor(private services: CheckoutServices) {}

  checkoutcontroller = async (req: AuthRequest, res: Response) => {
    try {
      const { addressline, city, state, zipcode } = req.body;

      const rawUserId = req.user?.user_id;
      const userId = Number(rawUserId);

      if (!rawUserId || isNaN(userId)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Invalid or missing user_id",
        });
      }
      const result = await this.services.checkoutservices(
        userId,
        addressline,
        city,
        state,
        zipcode
      );
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      logger.error("Checkout Error", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  getcheckoutcontroller = async (req: AuthRequest, res: Response) => {
    try {
      const rawUserId = req.user?.user_id;
      const userId = Number(rawUserId);

      if (!rawUserId || isNaN(userId)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Invalid or missing user_id",
        });
      }

      const result = await this.services.getCheckoutServices(userId);
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      logger.error("Get Checkout Error", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
