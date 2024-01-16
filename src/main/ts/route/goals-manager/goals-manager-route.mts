import { goalsManagerController } from "../../controller/goals-manager-controller.mjs";
import { Router } from "express";

export const goalsManagerRouter = Router();

goalsManagerRouter.get("/goalsmanager", goalsManagerController.getUserGoals);

goalsManagerRouter.put("/goalsmanager/:goalId", goalsManagerController.addMilestone);
goalsManagerRouter.put("/goalsmanager", goalsManagerController.addGoal);

goalsManagerRouter.delete("/goalsmanager/:goalId", goalsManagerController.deleteGoal);
goalsManagerRouter.delete("/goalsmanager/milestone/:milestoneId", goalsManagerController.deleteMilestone);

export default goalsManagerRouter;
