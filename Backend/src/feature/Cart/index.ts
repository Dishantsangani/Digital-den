import { CartController } from "./Controller/cartController.js";
import { CartRepository } from "./Repository/cartRepository.js";
import { CartRouter } from "./routes.js";
import { CartServices } from "./Services/cartServices.js";

const cartRepository = new CartRepository();

const cartServices = new CartServices(cartRepository);

const cartController = new CartController(cartServices);

const cartRouter = new CartRouter(cartController);

export default cartRouter.getRouter();
