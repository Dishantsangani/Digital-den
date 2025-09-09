import dbclient from "../../../db/db.js";
import {
  CLEAR_USER_CART_QUERY,
  GET_CART_TOTAL_QUERY,
  GET_USER_CART_QUERY,
  INSERT_ORDER_ITEM_QUERY,
  INSERT_ORDER_QUERY,
  UPDATE_PRODUCT_QUANTITY_QUERY,
} from "../../../db/Query/Checkout/checkoutQuery.js";
import {
  PAYMENT_INSERT,
  UPDATE_PAYMENT_STATUS,
} from "../../../db/Query/Payment/paymentQuery.js";

export class PaymentRepository {
  // Get total cart amount
  async getCartTotal(userId: number) {
    return dbclient.queryForOne(GET_CART_TOTAL_QUERY, [userId]);
  }

  // Get all items in user cart
  async getUserCartItems(userId: number) {
    return dbclient.queryForMany(GET_USER_CART_QUERY, [userId]);
  }

  // Insert a new order
  async insertOrder(
    userId: number,
    total_price: number,
    addressline: string,
    city: string,
    state: string,
    zipcode: string
  ) {
    return dbclient.queryForOne(INSERT_ORDER_QUERY, [
      userId,
      total_price,
      addressline,
      city,
      state,
      zipcode,
    ]);
  }

  // Insert individual order items
  async insertOrderItem(
    orderId: number,
    productId: number,
    quantity: number,
    price: number,
    discount: number,
    subTotal: number
  ) {
    return dbclient.queryForOne(INSERT_ORDER_ITEM_QUERY, [
      orderId,
      productId,
      quantity,
      price,
      discount,
      subTotal,
    ]);
  }

  // Update product quantity after order
  async updateProductQuantity(quantity: number, productId: number) {
    return dbclient.queryForOne(UPDATE_PRODUCT_QUANTITY_QUERY, [
      quantity,
      productId,
    ]);
  }

  // Clear user's cart after successful order
  async clearUserCart(userId: number) {
    return dbclient.queryForOne(CLEAR_USER_CART_QUERY, [userId]);
  }

  // Uodate Payment Repository
  async updatePaymentStatus(orderId: number) {
    return dbclient.queryForOne(UPDATE_PAYMENT_STATUS, [orderId]);
  }

  async insertPayment(orderId: number) {
    return dbclient.queryForOne(PAYMENT_INSERT, [orderId]);
  }
}
