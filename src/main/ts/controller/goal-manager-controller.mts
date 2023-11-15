import { prismaClient } from "../connection.mjs";
import type { Request, Response } from "express";

export const getGoalManager = (req: Request, res: Response): void =>
    res.render("goal-manager");

export const getGoalManagerWithId = async (req: Request, res: Response): Promise<void> =>
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

export const goalManagerController = Object.freeze({
    getGoalManager,
    getGoalManagerWithId
});

export default goalManagerController;
