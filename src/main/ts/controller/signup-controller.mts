import type { Request, Response } from "express";
import { PrismaClient } from '../../prisma/index.js';

const prisma = new PrismaClient();

export const signupUser = async (name: string, password: string): Promise<boolean> => {
  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({ where: { name } });

    if (existingUser) {
      return false; // User already exists
    }

    // Create a new user
    await prisma.user.create({ data: { name, password } });

    return true; // Signup successful
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

export const signupController = (req: Request, res: Response): void =>
{
    res.render("signup", { title: "CreateAccount" });
};
