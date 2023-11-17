import { goalsManagerController } from "../../controller/goals-manager-controller.mjs";
import { Router } from "express";

export const goalsManagerRouter = Router();

goalsManagerRouter.get("/goalsmanager/:id", goalsManagerController.getGoalsOfUserWithId);

export default goalsManagerRouter;
