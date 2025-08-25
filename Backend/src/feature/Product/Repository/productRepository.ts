import dbclient from "../../../db/db.js";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
} from "../../../db/Query/Product/productQuery.js";

export class ProductRepository {
  async getProductRepository() {
    const result = await dbclient.queryForMany(GET_PRODUCT);
    return result;
  }

  async createProductRepository(
    productname: string,
    price: number,
    category: string,
    productImage: string | null,
    stockquantity: number,
    taxrate: number,
    description: string
  ) {
    return await dbclient.queryForOne(CREATE_PRODUCT, [
      productname,
      price,
      category,
      productImage,
      stockquantity,
      taxrate,
      description,
    ]);
  }

  async deleteProductRepository(id: number) {
    return await dbclient.queryForOne(DELETE_PRODUCT, [id]);
  }
}
