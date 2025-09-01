import { OrderRepository } from "../Repository/orderRepository.js";

export class OrderServices {
  constructor(private repo: OrderRepository) {}
  async addOrderServices() {
    return await this.repo.addOrderRepository();
  }
}
