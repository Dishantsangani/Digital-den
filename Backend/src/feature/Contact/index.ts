import { ContactController } from "./Controller/contactController.js";
import { ContactRepository } from "./Repository/contactRepository.js";
import { ContactRouter } from "./route.js";
import { ContactServices } from "./Services/contactServices.js";

const contactRepository = new ContactRepository();

const contactServices = new ContactServices(contactRepository);

const contactController = new ContactController(contactServices);

const contactRouter = new ContactRouter(contactController);

export default contactRouter.getRouter();
