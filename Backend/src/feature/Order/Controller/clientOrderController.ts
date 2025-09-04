import { Request, Response } from "express";
import { ClientOrderServices } from "../Services/clientOrderServices.js";
import { StatusCodes } from "../../../utils/config/constants.js";
import logger from "../../../utils/Logger/index.js";

export class ClientOrderController {
  constructor(private services: ClientOrderServices) {}

  clientordercontroller = async (req: Request, res: Response) => {
    try {
      const result = await this.services.clientorderservices();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      logger.error("Order Error", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
