import { ProductRepository } from "../Repository/productRepository.js";

export class ProductService {
  constructor(private repo: ProductRepository) {}
  getProductServices = async () => {
    const result = await this.repo.getProductRepository();
    return result;
  };

  createProductService = async (
    productname: string,
    price: number,
    category: string,
    productImage: string | null,
    stockquantity: number,
    taxrate: number,
    description: string
  ) => {
    return await this.repo.createProductRepository(
      productname,
      price,
      category,
      productImage,
      stockquantity,
      taxrate,
      description
    );
  };

  deleteProductService = async (id: number) => {
    return await this.repo.deleteProductRepository(id);
  };
}
