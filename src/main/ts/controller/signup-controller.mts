import type { Request, Response } from "express";
import { prismaClient } from '../connection.mjs';

export const registerUser = async (req: any, res: any) => {
  const { name, password } = req.body;

  const signupUser = async (name: string, password: string): Promise<boolean> => {
    try {
      // Check if the user already exists
      const existingUser = await prismaClient.user.findUnique({ where: { name } });
  
      if (existingUser) {
        return false; // User already exists
      }
  
      // Create a new user
      await prismaClient.user.create({ data: { name, password } });
  
      return true; // Signup successful
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  };

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
}

export const signupController = (req: Request, res: Response): void =>
{
    res.render("signup", { title: "CreateAccount" });
};
