import express from "express";
import { ContactController } from "./Controller/contactController.js";

export class ContactRouter {
  constructor(private controller: ContactController) {}

  getRouter() {
    const contactRouter = express.Router();

    contactRouter.route("/addinquery").post(this.controller.inqueryController);

    contactRouter
      .route("/replayenquiry")
      .post(this.controller.replyinqueryController);

    contactRouter
      .route("/getinquery")
      .get(this.controller.getinqueryController);

    return contactRouter;
  }
}
