import dbclient from "../../../db/db.js";
import {
  CHECK_USER_BY_EMAIL,
  DELETE_TOKEN,
  FIND_TOKEN,
  INSERT_TOKEN,
  SET_PASSWORD,
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
    const result = await dbclient.queryForOne(SIGNUP_USER, [
      firstname,
      lastname,
      phonenumber,
      email,
      hashpassword,
    ]);
    return result;
  }

  async findEmailRepository(email: string) {
    const result = await dbclient.queryForOne(SIGNIN_BY_EMAIL, [email]);
    return result;
  }
  // Forgot Password
  async findUserByEmail(email: string) {
    const result = await dbclient.queryForOne(CHECK_USER_BY_EMAIL, [email]);
    return result;
  }

  async storedResetToken(email: string, token: string, expires_at: Date) {
    await dbclient.queryForOne(INSERT_TOKEN, [email, token, expires_at]);
  }

  async findTokenRepository(token: string) {
    const result = await dbclient.queryForOne(FIND_TOKEN, [token]);
    return result;
  }
  async setPasswordRepository(password: string, email: string) {
    const result = await dbclient.queryForOne(SET_PASSWORD, [password, email]);
    return result;
  }

  async deleteTokenRepository(token: string) {
    return await dbclient.queryForOne(DELETE_TOKEN, [token]);
  }
}
