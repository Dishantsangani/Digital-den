import { ClientOrderController } from "./Controller/clientOrderController.js";
import { ClientOrderRepository } from "./Repository/clientOrderRepository.js";
import { ClientOrderRouter } from "./route.js";
import { ClientOrderServices } from "./Services/clientOrderServices.js";

const clientOrderRepository = new ClientOrderRepository();

const clientOrderServices = new ClientOrderServices(clientOrderRepository);

const clientOrderController = new ClientOrderController(clientOrderServices);

const clientOrderRouter = new ClientOrderRouter(clientOrderController);

export default clientOrderRouter.getRouter();
