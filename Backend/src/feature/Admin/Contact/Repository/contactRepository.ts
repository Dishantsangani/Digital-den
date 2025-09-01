import dbclient from "../../../../db/db.js";
import {
  CONTACT_QUERY,
  GET_CONTACT_QUERY,
} from "../../../../db/Query/Admin/Contact/contactuery.js";

export class ContactRepository {
  async addinqueryRepository(name: string, email: string, message: string) {
    return await dbclient.queryForOne(CONTACT_QUERY, [name, email, message]);
  }

  async getinqueryRepository() {
    return await dbclient.queryForMany(GET_CONTACT_QUERY);
  }
}
