import type { Request, Response } from "express";

export const loginController = (req: Request, res: Response): void =>
{
    res.render("login", { title: "Blog" });
};
