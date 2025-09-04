import { Request, Response } from "express";
import { DashboardServices } from "../Services/dashboardServices.js";
import { StatusCodes } from "../../../../utils/config/constants.js";
import logger from "../../../../utils/Logger/index.js";

export class DashboardController {
  constructor(private services: DashboardServices) {}
  getAllProduct = async (req: Request, res: Response) => {
    try {
      const result = await this.services.getallproductService();
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      logger.error("Get all Product Error ", error);
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
      logger.error("Sales Mont Error", error);
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
      logger.error("Most Sales ProductError", error);
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
      logger.error("Sales By Category Error", error);
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
      logger.error("Growth Decline  Error", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
