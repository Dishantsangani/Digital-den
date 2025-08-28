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

  updateCartItemServices = async (id: number, quantity: number) => {
    return await this.repo.updateCartItemRepository(id, quantity);
  };
}
