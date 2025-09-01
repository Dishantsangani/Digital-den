import dbclient from "../../../db/db.js";
import {
  ADD_TO_CART,
  ADD_TO_CART_ITEMS,
  DELETE_CART_ITEMS,
  FIND_CART,
  FIND_CART_ITEM_BY_ID,
  FIND_CART_ITEM_QTY,
  FIND_CART_ITEMS,
  FIND_PRODUCT_PRICE,
  FIND_PRODUCT_STOCK,
  GET_CART_ITEMS,
  GET_SUBTOTAL,
  UPDATE_CART_ITEMS,
  UPDATE_CART_PRICE,
} from "../../../db/Query/Cart/cartQuery.js";

export class CartRepository {
  // Cart Repository
  addToCartRepository = async (userId: number) => {
    return await dbclient.queryForOne(ADD_TO_CART, [userId]);
  };

  findCartRepository = async (userid: number) => {
    return await dbclient.queryForOne(FIND_CART, [userid]);
  };

  deleteToCartRepository = async (itemId: number) => {
    const cartIdResult = await dbclient.queryForOne(FIND_CART_ITEMS, [itemId]);
    if (!cartIdResult) {
      throw new Error("Cart item not found");
    }
    const cartId = cartIdResult.cart_id;
    const deletedItem = await dbclient.queryForOne(DELETE_CART_ITEMS, [itemId]);
    await dbclient.queryForOne(UPDATE_CART_PRICE, [cartId]);

    return deletedItem;
  };

  // Cart Items
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

  updateCartItemRepository = async (id: number, quantity: number) => {
    const updatedItem = await dbclient.queryForOne(UPDATE_CART_ITEMS, [
      id,
      quantity,
    ]);

    const cartIdResult = await dbclient.queryForOne(FIND_CART_ITEMS, [id]);

    await dbclient.queryForOne(UPDATE_CART_PRICE, [cartIdResult.cart_id]);

    return updatedItem;
  };

  subTotalRepository = async (userid: number) => {
    return await dbclient.queryForOne(GET_SUBTOTAL, [userid]);
  };

  // get product stock
  findProductStockRepository = async (productId: number) => {
    return await dbclient.queryForOne(FIND_PRODUCT_STOCK, [productId]);
  };

  // how many already in cart (for this product)
  findCartItemQtyRepository = async (cartId: number, productId: number) => {
    return await dbclient.queryForOne(FIND_CART_ITEM_QTY, [cartId, productId]);
  };

  // when updating by cart_item id, get (cart_id, product_id)
  findCartItemByIdRepository = async (itemId: number) => {
    return await dbclient.queryForOne(FIND_CART_ITEM_BY_ID, [itemId]);
  };
}
