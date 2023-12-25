import { Router } from "express";

export const homepageRouter = Router();

homepageRouter.get('/homepage', (req, res) => {
    // Check if the user is logged in
    if (!req.session.user) {
      // Redirect to the login page or handle as needed
      return res.redirect('/');
    }
  
    // Render the homepage template (adjust the path and data accordingly)
    res.render('homepage', { name: req.session.user.name });
  });

  export default homepageRouter;