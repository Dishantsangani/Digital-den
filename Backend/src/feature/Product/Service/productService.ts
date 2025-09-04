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

 restockProductsService = async (items: { id: number; stockquentity: number }[]) => {
  const updatedProducts = [];
  for (const item of items) {
    if (typeof item.id !== "number" || isNaN(item.id)) {
      throw new Error(`Invalid product ID: ${item.id}`);
    }
    if (typeof item.stockquentity !== "number" || isNaN(item.stockquentity)) {
      throw new Error(`Invalid stock quantity for product ${item.id}`);
    }

    const updated = await this.repo.UpdateProductRepository(item.id, item.stockquentity);
    updatedProducts.push(updated);
  }
  return updatedProducts;
};

}
