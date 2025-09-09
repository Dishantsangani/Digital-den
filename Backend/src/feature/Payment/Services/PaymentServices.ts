import Stripe from "stripe";
import config from "../../../utils/config/config.js";
import { PaymentRepository } from "../Repository/paymentRepository.js";

const stripe = new Stripe(config.stripe, { apiVersion: "2025-08-27.basil" });

export class PaymentServices {
  constructor(private repo: PaymentRepository) {}

  async stripePaymentServices(orderData: any, items: any[], userId: number) {
    const cartTotal = await this.repo.getCartTotal(userId);
    const total_price = parseInt(cartTotal?.total_final ?? 0);
    const order = await this.repo.insertOrder(
      userId,
      total_price,
      orderData.addressline,
      orderData.city,
      orderData.state,
      orderData.zipcode
    );

    if (!order?.id) throw new Error("Order was not created.");

    const cartItems = await this.repo.getUserCartItems(userId);

    for (const item of cartItems) {
      await this.repo.insertOrderItem(
        order.id,
        item.product_id,
        item.quantity,
        Number(item.price),
        Number(item.discount ?? 0),
        Number(item.sub_total)
      );

      await this.repo.updateProductQuantity(item.quantity, item.product_id);
    }

    await this.repo.clearUserCart(userId);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      })),
      success_url: `${config.backend_url}/base/payment/paymentstatus?orderId=${order.id}`,
      cancel_url: `${config.frontend_url}/checkout`,
    });

    return session;
  }

  async handlePaymentSuccess(orderId: number) {
    await this.repo.updatePaymentStatus(orderId);
    await this.repo.insertPayment(orderId);
  }
}
