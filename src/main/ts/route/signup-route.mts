import { signupController } from "../controller/signup-controller.mjs";
import { Router } from "express";

export const signupRouter = Router();

signupRouter.get("/signup", signupController);

export default signupRouter;
