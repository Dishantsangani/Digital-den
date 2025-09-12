import { Request, Response } from "express";
import { AdminauthServices } from "../Services/adminAuthServices.js";
import { StatusCodes } from "../../../../utils/config/constants.js";
import { generateCookies } from "../../../utils/Cookies/generateCookies.js";
import config from "../../../../utils/config/config.js";
import logger from "../../../../utils/Logger/index.js";

export class AdminauthController {
  constructor(private services: AdminauthServices) {}

  adminauth = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const result = await this.services.adminauthservice(email, password);
      await generateCookies(res, result.token);

      return res.status(StatusCodes.OK).json({ data: result });
    } catch (error: any) {
      logger.error("Admin Auth", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  adminlogout = async (req: Request, res: Response) => {
    try {
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      });
      return res
        .status(StatusCodes.OK)
        .json({ message: "Logout successfully" });
    } catch (error: any) {
      logger.error("Logout Error", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };
}
