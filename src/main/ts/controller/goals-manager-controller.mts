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

export const addMilestone = async (req: Request, res: Response): Promise<void> =>
{
    if (req.session.user)
    {
        try
        {
            const { goalId } = req.params;

            const newMilestone = await prismaClient.milestone.create({
                data: {
                    title: req.body.title,
                    goal: { connect: { id: goalId } }
                }
            });

            res.json(newMilestone);
        }
        catch (error)
        {
            console.error(`${JSON.stringify(req.body, null, 4)}\n`, error);
            res.status(500).json({message: "Server error"});
        }
    }
    else
    {
        res.json({message: "User not logged in"});
    }
};

export const updateGoal = async (req: Request, res: Response): Promise<void> =>
{
    if (req.session.user)
    {
        try
        {
            const { goalId } = req.params;
            const { title, accomplished, private: isPrivate } = req.body;
            const data: { title: string; accomplished: boolean; private: boolean } | { accomplished: boolean; private: boolean }
                = title ? {title, accomplished, private: isPrivate} : {accomplished, private: isPrivate};

            const updateGoal = await prismaClient.goal.update({
                where: { id: goalId },
                data
            });

            res.json(updateGoal);
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

export const deleteGoal = async (req: Request, res: Response): Promise<void> =>
{
    if (req.session.user)
    {
        try
        {
            const { goalId } = req.params;
            const deletedGoal = await prismaClient.goal.delete( { where: {id: goalId} } );
            res.json(deletedGoal);
        }
        catch (error)
        {
            console.error(`${JSON.stringify(req.body, null, 4)}\n`, error);
            res.status(500).json({message: "Server error"});
        }
    }
    else
    {
        res.json({message: "User not logged in"});
    }
};

export const deleteMilestone = async (req: Request, res: Response): Promise<void> =>
{
    if (req.session.user)
    {
        try
        {
            const { milestoneId } = req.params;
            const deletedMilestone = await prismaClient.milestone.delete( { where: {id: milestoneId} } );
            res.json(deletedMilestone);
        }
        catch (error)
        {
            console.error(`${JSON.stringify(req.body, null, 4)}\n`, error);
            res.status(500).json({message: "Server error"});
        }
    }
    else
    {
        res.json({message: "User not logged in"});
    }
};

export const goalsManagerController = Object.freeze({
    getUserGoals, addGoal, addMilestone, updateGoal, deleteGoal, deleteMilestone
});

export default goalsManagerController;
