// login-route.mts
import { Router } from "express";
import { loginController, loginUser } from "../controller/login-controller.mjs";

export const loginRouter = Router();

loginRouter.get("/", loginController);

loginRouter.post("/login", async (req, res) => {
  const { name, password } = req.body;

  try {
    const isAuthenticated = await loginUser(name, password);

    if (!isAuthenticated) {
      return res.render('login', { errorMessage: 'Invalid credentials.', bootstrapClass: 'text-danger fw-bold' });
    }

    req.session.user = { name };
    res.redirect('/homepage');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default loginRouter;
