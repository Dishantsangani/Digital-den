import { OrderController } from "./Controller/orderController.js";
import { OrderRepository } from "./Repository/orderRepository.js";
import { OrderServices } from "./Services/orderServices.js";
import { OrderRouter } from "./routes.js";

const orderRepository = new OrderRepository();

const orderServices = new OrderServices(orderRepository);

const orderController = new OrderController(orderServices);

const orderRouter = new OrderRouter(orderController);

export default orderRouter.getRouter();
