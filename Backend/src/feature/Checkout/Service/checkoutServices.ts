import { CheckoutRepository } from "../Repository/checkoutRepository.js";

export class CheckoutServices {
  constructor(private repo: CheckoutRepository) {}
  async checkoutservices(
    user_id: number,
    addressline: string,
    city: string,
    state: string,
    zipcode: string
  ) {
    return await this.repo.addcheckoutRepository(
      user_id,
      addressline,
      city,
      state,
      zipcode
    );
  }

  async getCheckoutServices(user_id: number) {
    return await this.repo.getCheckoutRepository(user_id);
  }
}
