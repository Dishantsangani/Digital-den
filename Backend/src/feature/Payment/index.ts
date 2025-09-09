import { PaymentController } from "./Controller/PaymentController.js";
import { PaymentRepository } from "./Repository/paymentRepository.js";
import { PaymentRouter } from "./route.js";
import { PaymentServices } from "./Services/PaymentServices.js";

const paymentRepository = new PaymentRepository();

const paymentServices = new PaymentServices(paymentRepository);

const paymentController = new PaymentController(paymentServices);

const paymentRouter = new PaymentRouter(paymentController);

export default paymentRouter.getRouter();
