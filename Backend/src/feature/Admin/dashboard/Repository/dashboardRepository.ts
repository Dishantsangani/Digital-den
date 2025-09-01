import dbclient from "../../../../db/db.js";
import { GET_ALL_DASHBOARD_PRODUCT } from "../../../../db/Query/Admin/Dashboard/dashboardQuery.js";

export class DashboardRepository {
  async getallProductRepository() {
    return dbclient.queryForOne(GET_ALL_DASHBOARD_PRODUCT);
  }
}
