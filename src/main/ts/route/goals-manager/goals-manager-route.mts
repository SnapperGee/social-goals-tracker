import { goalsManagerController } from "../../controller/goals-manager-controller.mjs";
import { Router } from "express";

export const goalsManagerRouter = Router();

goalsManagerRouter.get("/goalsmanager/:userId", goalsManagerController.getGoalsOfUserWithId);
goalsManagerRouter.put("/goalsmanager/:userId", goalsManagerController.putGoalsOfUserWithId);

export default goalsManagerRouter;
