// auth-middleware.mts
import type { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session.user) {
    next(); // User is authenticated, continue to the next middleware or route handler
  } else {
    res.redirect('/'); // Redirect to the login page if not authenticated
  }
};