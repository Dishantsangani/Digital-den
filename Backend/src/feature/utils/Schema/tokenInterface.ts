import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: any;
}

export interface UserPayload extends JwtPayload {
  user_id: number;
  email: string;
  role: string;
  permissions: string[];
}
