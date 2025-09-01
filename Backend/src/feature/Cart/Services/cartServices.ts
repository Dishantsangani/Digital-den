import { CartRepository } from "../Repository/cartRepository.js";

export class CartServices {
  constructor(private repo: CartRepository) {}

  addToCartServices = async (
    productid: number,
    quantity: number,
    userId: number
  ) => {
    let findCart = await this.repo.findCartRepository(userId);
    if (!findCart) {
      findCart = await this.repo.addToCartRepository(userId);
    }

    // 1) check stock
    const stock = await this.repo.findProductStockRepository(productid);
    const available = Number(stock?.stockquantity ?? 0);
    if (available <= 0) throw new Error("Product is out of stock");

    // 2) how many already in this cart?
    const existing = await this.repo.findCartItemQtyRepository(
      findCart.id,
      productid
    );
    const currentQty = Number(existing?.quantity ?? 0);

    if (currentQty + quantity > available) {
      const left = Math.max(available - currentQty, 0);
      throw new Error(
        left > 0 ? `Only ${left} left in stock` : "Product is out of stock"
      );
    }

    return this.repo.addToCartItemRepository(findCart.id, productid, quantity);
  };

  getUserCartServices = async (userId: number) => {
    const cart = await this.repo.findCartRepository(userId);
    if (!cart) throw Error("Cart not found");

    const items = await this.repo.getCartItemRepository(cart.id);

    const subtotal = await this.repo.subTotalRepository(userId);

    const returnitems = {
      cartId: cart.id,
      totalQuantity: cart.total_quantity,
      totalPrice: subtotal.total_price,
      items,
    };
    return returnitems;
  };

  deleteToCartItem = async (itemId: number) => {
    return await this.repo.deleteToCartRepository(itemId);
  };

  updateCartItemServices = async (itemId: number, quantity: number) => {
    // return await this.repo.updateCartItemRepository(id, quantity);
    const row = await this.repo.findCartItemByIdRepository(itemId);
    if (!row) throw new Error("Cart item not found");

    const { cart_id, product_id } = row;

    // stock available?
    const stock = await this.repo.findProductStockRepository(product_id);
    const available = Number(stock?.stockquantity ?? 0);
    if (quantity > available) {
      throw new Error(
        available > 0
          ? `Only ${available} left in stock`
          : "Product is out of stock"
      );
    }

    // ok to update
    const updated = await this.repo.updateCartItemRepository(itemId, quantity);
    return updated;
  };
}
