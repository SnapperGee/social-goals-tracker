// homepage-controller.mts
import type { Request, Response } from "express";
import { prismaClient } from '../connection.mjs';

export const homepageController = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetch all goals from the database
    const goals = await prismaClient.goal.findMany({
      include: {
        user: true, // Include the user information related to each goal
      },
    });

    // Render the homepage template with the list of goals
    res.render("homepage", { goals });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const deleteGoal = async (req: Request, res: Response): Promise<void> => {
    const { goalId } = req.body;
  
    try {
      // Delete the goal based on the provided goalId
      await prismaClient.goal.delete({
        where: {
          id: goalId,
        },
      });
  
      res.redirect('/homepage');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

  export const editGoal = async (req: Request, res: Response): Promise<void> => {
    const { goalId, editContent } = req.body;
  try {
    // Update the goal content based on the provided goalId
    await prismaClient.goal.update({
      where: {
        id: goalId,
      },
      data: {
        title: editContent,
      },
    });

    // Redirect or send a response as needed
    res.redirect('/homepage');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
  };
