import type { Request, Response } from "express";
import { PrismaClient } from '../../prisma/index.js';

const prisma = new PrismaClient();

export const loginUser = async (name: string, password: string): Promise<boolean> => {
  try {
    const existingUser = await prisma.user.findUnique({ where: { name } });

    if (!existingUser || (existingUser.password && existingUser.password !== password)) {
      return false; // Authentication failed
    }

    return true; // Authentication successful
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

export const loginController = (req: Request, res: Response): void =>
{
    res.render("login", { title: "Blog" });
};

