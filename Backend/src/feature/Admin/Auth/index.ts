import { AdminauthController } from "./Controller/adminAuthController.js";
import { AdminauthRepository } from "./Repository/adminAuthRepository.js";
import { AdminauthRouter } from "./route.js";
import { AdminauthServices } from "./Services/adminAuthServices.js";

const adminauthRepository = new AdminauthRepository();

const adminauthServices = new AdminauthServices(adminauthRepository);

const adminauthController = new AdminauthController(adminauthServices);

const adminauthrouter = new AdminauthRouter(adminauthController);

export default adminauthrouter.getRouter();
