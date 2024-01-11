import { goalsManagerController } from "../../controller/goals-manager-controller.mjs";
import { Router } from "express";

export const goalsManagerRouter = Router();

goalsManagerRouter.get("/goalsmanager", goalsManagerController.getUserGoals);
goalsManagerRouter.put("/goalsmanager", goalsManagerController.addGoal);

export default goalsManagerRouter;
