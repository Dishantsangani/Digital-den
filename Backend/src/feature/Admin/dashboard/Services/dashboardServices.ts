import { DashboardRepository } from "../Repository/dashboardRepository.js";

export class DashboardServices {
  constructor(private repo: DashboardRepository) {}
  async getallproductService() {
    const result = await this.repo.getallProductRepository();
    return result;
  }
  async totalSalesMonthsServices() {
    const result = await this.repo.totalSalesMonthsRepository();
    return result;
  }
  async mostSalesProductServices() {
    const result = await this.repo.mostSalesProductRepository();
    return result;
  }
  async salesByCategoryServices() {
    const result = await this.repo.salesByCategoryRepository();
    return result;
  }
  async growthDeclineServices() {
    const result = await this.repo.growthDeclineRepository();
    return result;
  }
}
