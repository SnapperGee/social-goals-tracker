import { prismaClient } from "../../connection.mjs";
import type { Request, Response } from "express";

export const getProfileData = async (req: Request, res: Response): Promise<void> => {
    try
    {
        const { userId } = req.params;
        const profileData = await prismaClient.user.findUnique({ 
            where: { id: userId },
            select: { name: true},
            include: {
                goals: {
                    select: { title: true,
                              complete: true,
                              private: true },
                }
            }
        });
        res.render("profile", { title: "Profile", profileData });
        console.log(profileData);
    }
    catch (error)
    {
        res.status(500).json(error);
    }}

    export const profileController = Object.freeze({
        getProfileData
    });
    
    export default profileController;