import express from "express";
import { AdminauthController } from "./Controller/adminAuthController.js";

export class AdminauthRouter {
  constructor(private controller: AdminauthController) {}

  getRouter() {
    const adminauthrouter = express.Router();

    adminauthrouter.route("/signin").post(this.controller.adminauth);
    adminauthrouter.route("/logout").post(this.controller.adminlogout);

    return adminauthrouter;
  }
}
