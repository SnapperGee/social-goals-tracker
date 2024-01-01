import type { Request, Response } from "express";
import { prismaClient } from '../connection.mjs';

export const signinUser = async (req: any, res: any) => {
  const { name, password } = req.body;

  const loginUser = async (name: string, password: string): Promise<boolean> => {
    try {
      const existingUser = await prismaClient.user.findUnique({ where: { name } });

      if (!existingUser || (existingUser.password && existingUser.password !== password)) {
        return false; // Authentication failed
      }

      return true; // Authentication successful
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  };

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
}

export const loginController = (req: Request, res: Response): void =>
{
    res.render("login", { title: "Blog" });
};

