import express from "express";
import { AuthController } from "./Controller/authController.js";

export class AuthRouter {
  constructor(private controller: AuthController) {}
  getRouter() {
    const authRouter = express.Router();

    authRouter.route("/signup").post(this.controller.signup);
    authRouter.route("/signin").post(this.controller.singin);
    authRouter.route("/forgot-password").post(this.controller.forgotPassword);
    authRouter.route("/set-password").post(this.controller.setPassword);

    return authRouter;
  }
}
