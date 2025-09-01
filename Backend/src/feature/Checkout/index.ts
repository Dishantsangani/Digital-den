import { CheckoutController } from "./controller/checkoutController.js";
import { CheckoutRepository } from "./Repository/checkoutRepository.js";
import { CheckoutRouter } from "./route.js";
import { CheckoutServices } from "./Service/checkoutServices.js";

const checkoutrepository = new CheckoutRepository();

const checkoutservices = new CheckoutServices(checkoutrepository);

const checkoutcontroller = new CheckoutController(checkoutservices);

const checkoutrouter = new CheckoutRouter(checkoutcontroller);

export default checkoutrouter.getRouter();
