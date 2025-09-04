import Stripe from "stripe";
import config from "../../utils/config/config.js";
import { Request, Response } from "express";
import { StatusCodes } from "../../utils/config/constants.js";
import logger from "../../utils/Logger/index.js";

const stripe = new Stripe(config.stripe, { apiVersion: "2025-08-27.basil" });

export const paymentContoller = async (req: Request, res: Response) => {
  try {
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "No items provided" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price, // already in cents
        },
        quantity: item.quantity,
      })),
      success_url: "http://localhost:5173/order",
      cancel_url: "http://localhost:5173/checkout",
    });

    res.json({ id: session.id });
  } catch (error: any) {
    logger.error("Payment Error", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
