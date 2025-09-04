import dbclient from "../../../../db/db.js";
import { ADMIN_AUTH_QUERY } from "../../../../db/Query/Admin/AdminAuth/adminauthquery.js";

export class AdminauthRepository {
  async findEmailRepository(email: string) {
    const result = await dbclient.queryForOne(ADMIN_AUTH_QUERY, [email]);
    return result;
  }
}
