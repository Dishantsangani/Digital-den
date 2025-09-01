import { Request, Response } from "express";
import { OrderServices } from "../Services/orderServices.js";
import { StatusCodes } from "../../../../utils/config/constants.js";

export class OrderController {
  constructor(private service: OrderServices) {}
  addOrder = async (req: Request, res: Response) => {
    try {
      const result = await this.service.addOrderServices();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
