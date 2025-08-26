import {
  hashPassword,
  comparePassword,
} from "../../utils/Password/hashPassword.js";
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
    const result = await this.repo.signupRepository(
      firstname,
      lastname,
      phonenumber,
      email,
      hashpassword
    );
    return result;
  };

  signinServices = async (email: string, password: string) => {
    const user = await this.repo.findEmailRepository(email);
    if (!user) throw Error("User not Found");

    const isvalid = await comparePassword(password, user.password);
    if (!isvalid) throw Error("Invalid Credentials");

    return user;
  };
}
