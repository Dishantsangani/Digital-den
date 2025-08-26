import { AuthController } from "./Controller/authController.js";
import { AuthRepository } from "./Repository/authRepository.js";
import { AuthRouter } from "./routes.js";
import { AuthServices } from "./Services/authServices.js";

const authRepository = new AuthRepository();

const authServices = new AuthServices(authRepository);

const authController = new AuthController(authServices);

const authRouter = new AuthRouter(authController);

export default authRouter.getRouter();
