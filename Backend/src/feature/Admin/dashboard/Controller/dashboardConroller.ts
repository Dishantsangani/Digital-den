import { Request, Response } from "express";
import { DashboardServices } from "../Services/dashboardServices.js";
import { StatusCodes } from "../../../../utils/config/constants.js";

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

  totalSalesMonthsProduct = async (req: Request, res: Response) => {
    try {
      const result = await this.services.totalSalesMonthsServices();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  mostSalesProduct = async (req: Request, res: Response) => {
    try {
      const result = await this.services.mostSalesProductServices();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  salesByCategory = async (req: Request, res: Response) => {
    try {
      const result = await this.services.salesByCategoryServices();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
  growthDecline = async (req: Request, res: Response) => {
    try {
      const result = await this.services.growthDeclineServices();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
