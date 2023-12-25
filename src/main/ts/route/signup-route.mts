// signup-route.mts
import { signupController, signupUser } from "../controller/signup-controller.mjs";
import { Router } from "express";

export const signupRouter = Router();

signupRouter.get("/signup", signupController);

signupRouter.post("/signup", async (req, res) => {
    const { name, password } = req.body;
  
    try {
      const isSignupSuccessful = await signupUser(name, password);
  
      if (!isSignupSuccessful) {
        return res.render('signup', { errorMessage: 'User already exists. Please try again.', bootstrapClass: 'text-danger fw-bold' });
      }
  
      req.session.user = { name };
      res.redirect('/homepage');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

export default signupRouter;
