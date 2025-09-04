import { comparePassword } from "../../../utils/Password/hashPassword.js";
import { UserPayload } from "../../../utils/Schema/tokenInterface.js";
import { generateToken } from "../../../utils/Token/generateToken.js";
import { AdminauthRepository } from "../Repository/adminAuthRepository.js";

export class AdminauthServices {
  constructor(private repo: AdminauthRepository) {}

  async adminauthservice(email: string, password: string) {
    const user = await this.repo.findEmailRepository(email);
    if (!user) throw Error("User not Found");

    const isvalid = await comparePassword(password, user.password);
    if (!isvalid) throw Error("Invalid Credentials");

    const payload: UserPayload = {
      user_id: user.user_id,
      email: user.email,
      role: user.role,
      permissions: user.permissions || [],
    };

    const token = generateToken(payload);

    return { user, token };
  }
}
