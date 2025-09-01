import dbclient from "../../../db/db.js";
import {
  GET_CART_TOTAL_QUERY,
  CLEAR_USER_CART_QUERY,
  GET_USER_CART_QUERY,
  GET_USER_CART_ITEMS_FOR_CHECKOUT_QUERY,
  INSERT_ORDER_ITEM_QUERY,
  INSERT_ORDER_QUERY,
} from "../../../db/Query/Checkout/checkoutQuery.js";

export class CheckoutRepository {
  async addcheckoutRepository(
    user_id: number,
    addressline: string,
    city: string,
    state: string,
    zipcode: string
  ) {
    const cartTotal = await dbclient.queryForOne(GET_CART_TOTAL_QUERY, [
      user_id,
    ]);

    const total_price = parseInt(cartTotal?.total_final ?? 0);

    const order = await dbclient.queryForOne(INSERT_ORDER_QUERY, [
      user_id,
      total_price,
      addressline,
      city,
      state,
      zipcode,
    ]);
    if (!order?.id) throw new Error("Order was not created properly.");

    const cartItems = await dbclient.queryForMany(GET_USER_CART_QUERY, [
      user_id,
    ]);

    if (!cartItems.length)
      throw new Error("Cart is empty, no items to insert.");

    for (const item of cartItems) {
      await dbclient.queryForOne(INSERT_ORDER_ITEM_QUERY, [
        order.id,
        item.product_id,
        item.quantity,
        Number(item.price),
        Number(item.discount ?? 0),
        Number(item.sub_total),
      ]);
    }
    await dbclient.queryForOne(CLEAR_USER_CART_QUERY, [user_id]);
    return order;
  }

  // Get ALl order Product
  async getCheckoutRepository(user_id: number) {
    const items = await dbclient.queryForMany(
      GET_USER_CART_ITEMS_FOR_CHECKOUT_QUERY,
      [user_id]
    );
    const summary = items.reduce(
      (acc, item) => {
        acc.total_line += Number(item.sub_total);
        acc.total_discount += Number(item.discount);
        acc.total_final += Number(item.final_price);
        return acc;
      },
      { total_line: 0, total_discount: 0, total_final: 0 }
    );
    return { items, summary };
  }
}
