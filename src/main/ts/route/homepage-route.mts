import { homepageController } from "../controller/homepage-controller.mjs";
import { Router } from "express";

export const homepageRouter = Router();

homepageRouter.get("/", homepageController);

export default homepageRouter;
