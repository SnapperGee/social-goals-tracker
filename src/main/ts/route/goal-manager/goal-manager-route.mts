import { goalManagerController } from "../../controller/goal-manager-controller.mjs";
import { Router } from "express";

export const goalManagerRouter = Router();

goalManagerRouter.get("/goalmanager", goalManagerController.getGoalManager);
goalManagerRouter.get("/goalmanager/:id", goalManagerController.getGoalManagerWithId);

export default goalManagerRouter;
