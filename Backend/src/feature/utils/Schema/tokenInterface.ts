import { JwtPayload } from "jsonwebtoken";

export interface DecodedUser {
  id: number;
  email: string;
  role: string;
}
export interface AuthenticatedRequest {
  user?: DecodedUser;
}

export interface UserPayload extends JwtPayload {
  id: number;
  email: string;
  role: string;
  permissions: string[];
}
