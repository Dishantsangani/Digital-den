import { DashboardController } from "./Controller/dashboardConroller.js";
import { DashboardRepository } from "./Repository/dashboardRepository.js";
import { DashboardRouter } from "./routes.js";
import { DashboardServices } from "./Services/dashboardServices.js";

const dashboardRepository = new DashboardRepository();

const dashboardService = new DashboardServices(dashboardRepository);

const dashboardController = new DashboardController(dashboardService);

const dashboardRouter = new DashboardRouter(dashboardController);

export default dashboardRouter.getRouter();
