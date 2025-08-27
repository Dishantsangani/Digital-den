import dbclient from "../../../db/db.js";
import {
  ADD_TO_CART,
  ADD_TO_CART_ITEMS,
  FIND_CART,
  FIND_PRODUCT_PRICE,
  GET_CART_ITEMS,
  UPDATE_CART_PRICE,
} from "../../../db/Query/Cart/cartQuery.js";

export class CartRepository {
  addToCartRepository = async (userId: number) => {
    return await dbclient.queryForOne(ADD_TO_CART, [userId]);
  };

  findCartRepository = async (userid: number) => {
    return await dbclient.queryForOne(FIND_CART, [userid]);
  };

  addToCartItemRepository = async (
    cartId: number,
    productId: number,
    quantity: number
  ) => {
    const product = await dbclient.queryForOne(FIND_PRODUCT_PRICE, [productId]);

    const price = product.price;

    const result = await dbclient.queryForOne(ADD_TO_CART_ITEMS, [
      cartId,
      productId,
      quantity,
      price,
    ]);

    await dbclient.queryForOne(UPDATE_CART_PRICE, [cartId]);

    return result;
  };

  getCartItemRepository = async (cartId: number) => {
    const result = await dbclient.queryForMany(GET_CART_ITEMS, [cartId]);
    return result;
  };
}
