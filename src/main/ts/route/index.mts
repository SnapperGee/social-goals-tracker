import { loginRouter } from "./login-route.mjs";
import { signupRouter } from "./signup-route.mjs";
import { goalsManagerRouter } from "./goals-manager/goals-manager-route.mjs";
import { profileRouter } from "./profile/profile-route.mjs";
import { Router } from "express";

export const router = Router();

router.use(loginRouter, goalsManagerRouter, signupRouter, profileRouter);

export default router;
 