import { profileController } from "../../controller/profile-contollers/profile-controller.mjs";
import { Router } from "express";

export const profileRouter = Router();

profileRouter.get("/profile/:userId", profileController);

export default profileRouter;