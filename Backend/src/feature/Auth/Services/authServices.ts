import {
  hashPassword,
  comparePassword,
} from "../../utils/Password/hashPassword.js";
import { UserPayload } from "../../utils/Schema/tokenInterface.js";
import { generateToken } from "../../utils/Token/generateToken.js";
import { AuthRepository } from "../Repository/authRepository.js";

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
}
