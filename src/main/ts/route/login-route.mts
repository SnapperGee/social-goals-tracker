// login-route.mts
import { Router } from "express";
import { loginController, signinUser } from "../controller/login-controller.mjs";

export const loginRouter = Router();

loginRouter.get("/", loginController);

loginRouter.post("/login", signinUser);

export default loginRouter;
