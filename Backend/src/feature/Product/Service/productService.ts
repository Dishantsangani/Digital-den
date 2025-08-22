import { ProductRepository } from "../Repository/productRepository.js";

export class ProductService {
  constructor(private repo: ProductRepository) {}
  getProductServices = async () => {
    const result = await this.repo.getProductRepository();
    return result;
  };
  
  createProductService = async (
    name: string,
    price: number,
    category: string,
    quantity: number,
    rate: number
  ) => {
    return await this.repo.createProductRepository(
      name,
      price,
      category,
      quantity,
      rate
    );
  };
}
