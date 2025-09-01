import { CustomerRepository } from "../Repository/customerRepository.js";

export class CustomerServices {
  constructor(private repo: CustomerRepository) {}

  async customerServices() {
    return await this.repo.customerRepository();
  }
}
