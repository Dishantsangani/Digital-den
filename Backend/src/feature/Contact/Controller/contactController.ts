import { Request, Response } from "express";
import { ContactServices } from "../Services/contactServices.js";
import { StatusCodes } from "../../../utils/config/constants.js";

export class ContactController {
  constructor(private services: ContactServices) {}

  inqueryController = async (req: Request, res: Response) => {
    try {
      const { name, email, message } = req.body;
      const result = await this.services.addInquireyServices(
        name,
        email,
        message
      );
      return res.status(StatusCodes.CREATED).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
