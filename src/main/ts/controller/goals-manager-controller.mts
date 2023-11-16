import { prismaClient } from "../connection.mjs";
import type { Request, Response } from "express";

export const getGoalsManager = (req: Request, res: Response): void =>
    res.render("goals-manager");

export const getGoalsManagerWithId = async (req: Request, res: Response): Promise<void> =>
{

    try
    {
        const goalId = req.params.id;
        const goal = await prismaClient.goal.findUnique({ where: { id: goalId } });
        res.json(goal);
    }
    catch (error)
    {
        res.status(500).json(error);
    }
};

export const goalsManagerController = Object.freeze({
    getGoalsManager,
    getGoalsManagerWithId
});

export default goalsManagerController;
