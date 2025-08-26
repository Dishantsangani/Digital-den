import { Request, Response } from "express";
import { AuthServices } from "../Services/authServices.js";
import { StatusCodes } from "../../../utils/config/constants.js";

export class AuthController {
  constructor(private services: AuthServices) {}

  signup = async (req: Request, res: Response) => {
    try {
      const { firstname, lastname, phonenumber, email, password } = req.body;
      const result = await this.services.signupService(
        firstname,
        lastname,
        phonenumber,
        email,
        password
      );
      return res.status(StatusCodes.CREATED).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  singin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const result = await this.services.signinServices(email, password);
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
