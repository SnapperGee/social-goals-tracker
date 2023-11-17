import { prismaClient } from "../connection.mjs";
import type { Request, Response } from "express";

export const getGoalsOfUserWithId = async (req: Request, res: Response): Promise<void> =>
{
    try
    {
        const goalId = req.params.id;
        const goal = await prismaClient.goal.findUnique({ where: { id: goalId } });
        // res.json(goal);
        res.render("goals-manager");
    }
    catch (error)
    {
        res.status(500).json(error);
    }
};

export const goalsManagerController = Object.freeze({
    getGoalsOfUserWithId
});

export default goalsManagerController;
