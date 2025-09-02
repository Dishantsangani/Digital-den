import { ClientOrderRepository } from "../Repository/clientOrderRepository.js";

export class ClientOrderServices {
  constructor(private repo: ClientOrderRepository) {}

  clientorderservices = async () => {
    return await this.repo.clientOrderRepository();
  };
}
