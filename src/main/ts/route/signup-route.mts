// signup-route.mts
import { signupController, registerUser } from "../controller/signup-controller.mjs";
import { Router } from "express";

export const signupRouter = Router();

signupRouter.get("/signup", signupController);

signupRouter.post("/signup", registerUser);

export default signupRouter;
