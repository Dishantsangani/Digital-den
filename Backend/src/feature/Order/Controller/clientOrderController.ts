import { Request, Response } from "express";
import { ClientOrderServices } from "../Services/clientOrderServices.js";
import { StatusCodes } from "../../../utils/config/constants.js";

export class ClientOrderController {
  constructor(private services: ClientOrderServices) {}

  clientordercontroller = async (req: Request, res: Response) => {
    try {
      const result = await this.services.clientorderservices();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
