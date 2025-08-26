import { Response } from "express";
import config from "../../../utils/config/config.js";

export const generateCookies = async (res: Response, token: string) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: config.secret.jwtsecretkey === "production",
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 2,
  });
};
