import { Request, Response } from "express";
import { AuthServices } from "../Services/authServices.js";
import { kMessages, StatusCodes } from "../../../utils/config/constants.js";
import { generateCookies } from "../../utils/Cookies/generateCookies.js";

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
      await generateCookies(res, result.token);
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
      await generateCookies(res, result.token);
      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  forgotPassword = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      const result = await this.services.forgotPasswordService(email);

      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  setPassword = async (req: Request, res: Response) => {
    try {
      const { token, password } = req.body;
      const { user, token: jwtToken } = await this.services.setPasswordService(
        token,
        password
      );
      await generateCookies(res, jwtToken);
      return res
        .status(StatusCodes.OK)
        .json({ data: user, message: kMessages.SET_PASSWORD });
    } catch (error: any) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
