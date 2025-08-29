import { nanoid } from "nanoid";
import {
  hashPassword,
  comparePassword,
} from "../../utils/Password/hashPassword.js";
import { UserPayload } from "../../utils/Schema/tokenInterface.js";
import { generateToken } from "../../utils/Token/generateToken.js";
import { AuthRepository } from "../Repository/authRepository.js";
import { sendForgotPasswordMail } from "../../utils/Mail/sendForgotPasswordMail.js";

export class AuthServices {
  constructor(private repo: AuthRepository) {}

  signupService = async (
    firstname: string,
    lastname: string,
    phonenumber: number,
    email: string,
    password: string
  ) => {
    const isExists = await this.repo.findEmailRepository(email);
    if (isExists) throw Error("User is Alreeady Exists");

    const hashpassword = await hashPassword(password);

    const user = await this.repo.signupRepository(
      firstname,
      lastname,
      phonenumber,
      email,
      hashpassword
    );

    const payload: UserPayload = {
      user_id: user.user_id,
      email: user.email,
      role: user.role || "customer",
      permissions: user.permissions || [],
    };

    const token = generateToken(payload);
    return { user: user, token };
  };

  signinServices = async (email: string, password: string) => {
    const user = await this.repo.findEmailRepository(email);
    if (!user) throw Error("User not Found");

    const isvalid = await comparePassword(password, user.password);
    if (!isvalid) throw Error("Invalid Credentials");

    const payload: UserPayload = {
      user_id: user.user_id,
      email: user.email,
      role: user.role || "customer",
      permissions: user.permissions || [],
    };

    const token = generateToken(payload);

    return { user, token };
  };

  forgotPasswordService = async (email: string) => {
    const user = await this.repo.findUserByEmail(email);
    if (!user) throw Error("User Not Found");

    const token: string = nanoid();
    const expires_at = new Date(Date.now() + 15 * 60 * 1000);
    await this.repo.storedResetToken(user.email, token, expires_at);
    sendForgotPasswordMail({ email, token });
  };

  setPasswordService = async (token: string, password: string) => {
    const result = await this.repo.findTokenRepository(token);
    const row = result?.rows ? result.rows[0] : result;
    if (!row) {
      throw new Error("Invalid or missing token");
    }
    if (new Date(row.expires_at) < new Date()) {
      throw new Error("Token expired");
    }

    const hashedPassword = await hashPassword(password);
    const email = row.email;
    const user = await this.repo.setPasswordRepository(hashedPassword, email);

    if (!user) {
      throw new Error("User not found");
    }

    // prepare payload
    const payload: UserPayload = {
      user_id: user.user_id,
      email: user.email,
      role: user.role,
      permissions: user.permissions || [],
    };

    // generate JWT
    const jwtToken = generateToken(payload);

    await this.repo.deleteTokenRepository(token);
    return { user: payload, token: jwtToken };
  };
}
