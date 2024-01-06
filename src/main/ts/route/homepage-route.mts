import { Router } from "express";
import { homepageController, deleteGoal, editGoal } from "../controller/homepage-controller.mjs";
import { createGoal } from "../controller/goal-controller.mjs"; // Make sure the path is correct
import { isAuthenticated } from '../middleware/authentication.mjs';


export const homepageRouter = Router();

homepageRouter.get("/homepage", isAuthenticated, homepageController);

  // Add a route for handling the creation of goals
homepageRouter.post("/create-goal", createGoal);

// Add a route for handling the deletion of goals
homepageRouter.post("/delete-goal", deleteGoal);

homepageRouter.post("/edit-goal", editGoal);

  export default homepageRouter;