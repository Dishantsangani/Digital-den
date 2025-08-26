import dbclient from "../../../db/db.js";
import {
  SIGNIN_BY_EMAIL,
  SIGNUP_USER,
} from "../../../db/Query/Auth/authQuery.js";

export class AuthRepository {
  async signupRepository(
    firstname: string,
    lastname: string,
    phonenumber: number,
    email: string,
    hashpassword: string
  ) {
    return await dbclient.queryForOne(SIGNUP_USER, [
      firstname,
      lastname,
      phonenumber,
      email,
      hashpassword,
    ]);
  }

  async findEmailRepository(email: string) {
    const result = await dbclient.queryForOne(SIGNIN_BY_EMAIL, [email]);
    return result;
  }
}
