import { loginRouter } from "./login-route.mjs";
import { goalManagerRouter } from "./goal-manager/goal-manager-route.mjs";
import { Router } from "express";

export const router = Router();

router.use(loginRouter, goalManagerRouter);

export default router;
