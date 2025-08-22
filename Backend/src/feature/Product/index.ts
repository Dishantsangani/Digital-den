import ProductRouter from "./route.js";
import ProductController from "./controller/productController.js";
import { ProductService } from "./Service/productService.js";
import { ProductRepository } from "./Repository/productRepository.js";

const productRepository = new ProductRepository();

const productServices = new ProductService(productRepository);

const productController = new ProductController(productServices);

const productRouter = new ProductRouter(productController);

export default productRouter.getRouter();
