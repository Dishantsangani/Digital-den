import { DashboardRepository } from "../Repository/dashboardRepository.js";

export class DashboardServices {
  constructor(private repo: DashboardRepository) {}
  async getallproductService() {
    return await this.repo.getallProductRepository();
  }
}
