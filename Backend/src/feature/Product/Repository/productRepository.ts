import dbclient from "../../../db/db.js";
import {
  CREATE_PRODUCT,
  GET_PRODUCT,
} from "../../../db/Query/Product/productQuery.js";

export class ProductRepository {
  async getProductRepository() {
    const result = await dbclient.queryForMany(GET_PRODUCT);
    return result;
  }

  async createProductRepository(
    name: string,
    price: number,
    category: string,
    quantity: number,
    rate: number
  ) {
    return await dbclient.queryForOne(CREATE_PRODUCT, [
      name,
      price,
      category,
      quantity,
      rate,
    ]);
  }
}
