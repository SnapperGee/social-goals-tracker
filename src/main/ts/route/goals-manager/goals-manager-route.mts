import { goalsManagerController } from "../../controller/goals-manager-controller.mjs";
import { Router } from "express";

export const goalsManagerRouter = Router();

goalsManagerRouter.get("/goalsmanager", goalsManagerController.getGoalsOfUserWithId);
goalsManagerRouter.put("/goalsmanager", goalsManagerController.putGoalsOfUserWithId);

export default goalsManagerRouter;
