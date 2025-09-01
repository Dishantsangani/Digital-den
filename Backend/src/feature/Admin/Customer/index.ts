import { CustomerController } from "./Controller/customerController.js";
import { CustomerRepository } from "./Repository/customerRepository.js";
import { CustomerRouter } from "./route.js";
import { CustomerServices } from "./Services/customerServices.js";

const customerRepository = new CustomerRepository();

const customerServices = new CustomerServices(customerRepository);

const customerController = new CustomerController(customerServices);

const customerRouter = new CustomerRouter(customerController);

export default customerRouter.getRouter();
