import { Request, Response } from "express";
import { OrderServices } from "../Services/orderServices.js";
import { StatusCodes } from "../../../../utils/config/constants.js";
import logger from "../../../../utils/Logger/index.js";

export class OrderController {
  constructor(private service: OrderServices) {}
  addOrder = async (req: Request, res: Response) => {
    try {
      const result = await this.service.addOrderServices();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      logger.error("Add Order Error", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
