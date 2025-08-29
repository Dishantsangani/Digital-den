import { DashboardRepository } from "../Repository/dashboardRepository.js";

export class DashboardServices {
  constructor(private repo: DashboardRepository) {}
  async getallproductService() {
    const result = await this.repo.getallProductRepository();
    return result;
  }
}
