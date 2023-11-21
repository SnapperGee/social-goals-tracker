import { prismaClient } from "../../connection.mjs";
import type { Request, Response } from "express";

export const getProfileData = async (req: Request, res: Response): Promise<void> => {
    try
    {
        const { userId } = req.params;
        const profileData = await prismaClient.user.findUnique({ 
            where: { id: userId },
            select: {
                name: true
            },
            include: {
                goal: {
                    select: { title: true,
                             private: true },
                    include: { milestone: true }
                }
            }
        });
    }
    catch (error)
    {
        res.status(500).json(error);
    }}