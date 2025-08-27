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
    let cart = await this.repo.findCartRepository(userId);
    if (!cart) throw Error("Cart Is Not Found");

    const items = await this.repo.getCartItemRepository(cart.id);
    return items;
  };
}
