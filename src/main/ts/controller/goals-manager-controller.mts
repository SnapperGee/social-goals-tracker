import { prismaClient } from "../connection.mjs";
import type { Request, Response } from "express";

export const getGoalsOfUserWithId = async (req: Request, res: Response): Promise<void> =>
{
    try
    {
        const { userId } = req.params;
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
        res.status(500).json(error);
    }
};

export const goalsManagerController = Object.freeze({
    getGoalsOfUserWithId
});

export default goalsManagerController;
