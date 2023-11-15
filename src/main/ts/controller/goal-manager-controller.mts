import type { Request, Response } from "express";

export const goalManagerController = (req: Request, res: Response): void =>
{
    res.render("goal-manager");
};
