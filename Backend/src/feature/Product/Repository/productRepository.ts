import dbclient from "../../../db/db.js";
import {
  CHECK_PRODUCT_IN_ORDER_ITEMS,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FROM_CART_ITEMS,
  GET_PRODUCT,
  RESTOCK_PRODUCT,
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
    const isCheck = await dbclient.queryForOne(CHECK_PRODUCT_IN_ORDER_ITEMS, [
      id,
    ]);
    if (isCheck) {
      throw new Error(
        "Cannot delete product: It is already referenced in orders"
      );
    }
    await dbclient.queryForOne(DELETE_PRODUCT_FROM_CART_ITEMS, [id]);
    return await dbclient.queryForOne(DELETE_PRODUCT, [id]);
  }

  async UpdateProductRepository(id: number, stockquantity: number) {
    return await dbclient.queryForOne(RESTOCK_PRODUCT, [id, stockquantity]);
  }
}
