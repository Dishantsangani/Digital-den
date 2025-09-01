import { Request, Response } from "express";
import { CustomerServices } from "../Services/customerServices.js";
import { StatusCodes } from "../../../../utils/config/constants.js";

export class CustomerController {
  constructor(private services: CustomerServices) {}

  customerController = async (req: Request, res: Response) => {
    try {
      const result = await this.services.customerServices();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
