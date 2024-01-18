import type { milestone } from "../../prisma/index";
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
        res.status(403).json({message: "User not logged in"});
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
        res.status(403).json({message: "User not logged in"});
    }
};

export const updateGoal = async (req: Request, res: Response): Promise<void> =>
{
    if (req.session.user)
    {
        try
        {
            const userId = req.session.user.id;
            const newGoal = await prismaClient.goal.update({
                where: { id: req.params.goalId },
                data: {
                    title: req.body.title,
                    private: req.body.private,
                    accomplished: req.body.accomplished,
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
        res.status(403).json({message: "User not logged in"});
    }
};

export const updateMilestones = async (req: Request, res: Response): Promise<void> =>
{
    const milestones = req.body;

    try
    {
        const updatedMilestones = await prismaClient.$transaction(milestones.map(
            ({id, title, accomplished}: Pick<milestone, "id" | "title" | "accomplished">) => prismaClient.milestone.update({
                where: { id },
                data: { title, accomplished }
            }))
        );

        res.json(updatedMilestones);
    }
    catch (error)
    {
        res.status(500).json({message: "Server error"});
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
        res.status(403).json({message: "User not logged in"});
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
        res.status(403).json({message: "User not logged in"});
    }
};

export const goalsManagerController = Object.freeze({
    getUserGoals, addGoal, addMilestone, updateGoal, updateMilestones, deleteGoal, deleteMilestone
});

export default goalsManagerController;
