import { prismaClient } from "../connection.mjs";
import type { Request, Response } from "express";

export const getUserGoals = async (req: Request, res: Response): Promise<void> =>
{
    if (req.session.user)
    {
        try
        {
            const userId = req.session.user.id;
            const userData = await prismaClient.user.findUnique({
                where: { id: userId },
                include: {
                    goals: {
                        include: { milestones: true }
                    }
                }
            });
            res.render("goals-manager", { userData });
        }
        catch (error)
        {
            res.status(500).json({message: "Server error"});
        }
    }
    else
    {
        res.redirect("/homepage");
    }
};

export const addGoal = async (req: Request, res: Response): Promise<void> =>
{
    if (req.session.user)
    {
        try
        {
            const userId = req.session.user.id;
            const newGoal = await prismaClient.goal.create({
                data: {
                    title: req.body.title,
                    private: req.body.isPrivate,
                    user: { connect: { id: userId } }
                }
            });

            res.json(newGoal);
        }
        catch (error)
        {
            res.status(500).json({message: "Server error"});
        }
    }
    else
    {
        res.json({message: "User not logged in"});
    }
};

export const goalsManagerController = Object.freeze({
    getUserGoals, addGoal
});

export default goalsManagerController;
