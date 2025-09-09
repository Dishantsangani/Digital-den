import { Request, Response } from "express";
import { StatusCodes } from "../../../utils/config/constants.js";
import { AuthRequest } from "../../utils/Schema/tokenInterface.js";
import { PaymentServices } from "../Services/PaymentServices.js";
import config from "../../../utils/config/config.js";

export class PaymentController {
  constructor(private services: PaymentServices) {}

  StripePaymentController = async (req: AuthRequest, res: Response) => {
    try {
      const { items, orderData } = req.body;

      const rawUserId = req.user?.user_id;

      const userId = Number(rawUserId);

      if (!items || !Array.isArray(items) || items.length === 0) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "No items provided" });
      }
      const session = await this.services.stripePaymentServices(
        orderData,
        items,
        userId
      );
      return res.status(StatusCodes.OK).json({ id: session.id });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  SuccessPaymentController = async (req: Request, res: Response) => {
    try {
      const orderId = Number(req.query.orderId);
      if (!orderId) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Missing orderId" });
      }
      const result = await this.services.handlePaymentSuccess(orderId);
      return res.redirect(`${config.frontend_url}/order`);
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
