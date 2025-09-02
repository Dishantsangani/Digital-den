import dbclient from "../../../db/db.js";
import { GET_CLIENT_ORDER } from "../../../db/Query/ClientOrder/clientOrderQuery.js";

export class ClientOrderRepository {
  async clientOrderRepository() {
    return await dbclient.queryForOne(GET_CLIENT_ORDER);
  }
}
