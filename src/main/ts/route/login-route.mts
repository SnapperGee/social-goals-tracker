import { loginController } from "../controller/login-controller.mjs";
import { Router } from "express";

export const loginRouter = Router();

loginRouter.get("/", loginController);

export default loginRouter;
