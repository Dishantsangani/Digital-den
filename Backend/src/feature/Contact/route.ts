import express from "express";
import { ContactController } from "./Controller/contactController.js";

export class ContactRouter {
  constructor(private controller: ContactController) {}

  getRouter() {
    const contactRouter = express.Router();

    contactRouter.route("/addinquery").post(this.controller.inqueryController);

    return contactRouter;
  }
}
