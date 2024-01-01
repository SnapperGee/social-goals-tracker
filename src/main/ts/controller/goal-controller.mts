// goal-controller.mts
import type { Request, Response } from "express";
import { prismaClient } from '../connection.mjs';

// goal-controller.mts
export const createGoal = async (req: Request, res: Response): Promise<void> => {
    const { title, isPrivate } = req.body;
    const userId = req.session.user?.name; // Using optional chaining
  
    try {
      if (!userId) {
        // Handle the case when user information is not available
        res.status(401).send('Unauthorized');
      }
  
      const goal = await prismaClient.goal.create({
        data: {
          title,
          private: isPrivate || false,
          user: {
            connect: {
              name: userId,
            },
          },
        },
      });
  
      res.redirect('/homepage');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };