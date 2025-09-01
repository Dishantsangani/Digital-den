import dbclient from "../../../../db/db.js";
import { ALL_CUSTOMER } from "../../../../db/Query/Admin/Customers/customerQuery.js";

export class CustomerRepository {
  async customerRepository() {
    return await dbclient.queryForMany(ALL_CUSTOMER);
  }
}
