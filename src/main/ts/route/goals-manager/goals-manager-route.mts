import { goalsManagerController } from "../../controller/goals-manager-controller.mjs";
import { Router } from "express";

export const goalsManagerRouter = Router();

goalsManagerRouter.get("/goalsmanager/:userId", goalsManagerController.getGoalsOfUserWithId);

export default goalsManagerRouter;
