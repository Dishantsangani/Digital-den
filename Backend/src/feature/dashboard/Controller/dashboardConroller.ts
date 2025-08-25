import { Request, Response } from "express";
import { StatusCodes } from "../../../utils/config/constants.js";
import { DashboardServices } from "../Services/dashboardServices.js";

export class DashboardController {
  constructor(private services: DashboardServices) {}
  getAllProduct = async (req: Request, res: Response) => {
    try {
      const result = await this.services.getallproductService();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
