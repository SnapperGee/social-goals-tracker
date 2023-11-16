import { goalsManagerController } from "../../controller/goals-manager-controller.mjs";
import { Router } from "express";

export const goalsManagerRouter = Router();

goalsManagerRouter.get("/goalsmanager", goalsManagerController.getGoalsManager);
goalsManagerRouter.get("/goalsmanager/:id", goalsManagerController.getGoalsManagerWithId);

export default goalsManagerRouter;
