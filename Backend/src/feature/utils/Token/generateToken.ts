import { UserPayload } from "./../Schema/tokenInterface.js";
import jwt, { SignOptions } from "jsonwebtoken";
import config from "../../../utils/config/config.js";

export function generateToken(
  payload: UserPayload,
  expiresIn: SignOptions["expiresIn"] = "2h"
): string {
  const jetSecretKey = config.secret.jwtsecretkey;

  if (!jetSecretKey) {
    throw new Error("jwtSecretKey is Not set");
  }
  return jwt.sign(payload, jetSecretKey, { expiresIn });
}
