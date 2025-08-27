import jwt from "jsonwebtoken";
import { NextFunction, Response } from "express";
import { kMessages } from "./../../../utils/config/constants.js";
import config from "../../../utils/config/config.js";
import { AuthRequest } from "../Schema/tokenInterface.js";
import { StatusCodes } from "../../../utils/config/constants.js";

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token;

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: kMessages.USER_UNAUTHORIZED });
  }

  try {
    const decoded = jwt.verify(token, config.secret.jwtsecretkey);

    req.user = decoded;

    next();
  } catch (error: any) {
    return res.status(StatusCodes.FORBIDDEN).json({ message: error.message });
  }
};
