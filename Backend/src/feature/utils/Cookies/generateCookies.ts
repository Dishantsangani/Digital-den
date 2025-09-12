import { Response } from "express";

export const generateCookies = async (res: Response, token: string) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 1000 * 60 * 60 * 2,
  });
};
