import { loginRouter } from "./login-route.mjs";
import { Router } from "express";

export const router = Router();

router.use(loginRouter);

export default router;
