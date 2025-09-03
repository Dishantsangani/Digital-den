import dbclient from "../../../../db/db.js";
import {
  GET_ALL_DASHBOARD_PRODUCT,
  GROWTH_DECLINE,
  MOST_SALES_PRODUCT,
  SALES_BY_CATEGORY,
  TOTAL_SALES_MONTH,
} from "../../../../db/Query/Admin/Dashboard/dashboardQuery.js";

export class DashboardRepository {
  async getallProductRepository() {
    return dbclient.queryForOne(GET_ALL_DASHBOARD_PRODUCT);
  }

  async totalSalesMonthsRepository() {
    return dbclient.queryForOne(TOTAL_SALES_MONTH);
  }
  async mostSalesProductRepository() {
    return dbclient.queryForMany(MOST_SALES_PRODUCT);
  }
  async salesByCategoryRepository() {
    return dbclient.queryForMany(SALES_BY_CATEGORY);
  }
  async growthDeclineRepository() {
    return dbclient.queryForMany(GROWTH_DECLINE);
  }
}
