import { ContactRepository } from "../Repository/contactRepository.js";

export class ContactServices {
  constructor(private repo: ContactRepository) {}

  async addInquireyServices(name: string, email: string, message: string) {
    return await this.repo.addinqueryRepository(name, email, message);
  }
  async getinquiryServices() {
    return await this.repo.getinqueryRepository();
  }
}
