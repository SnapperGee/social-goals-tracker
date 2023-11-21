import type { Request, Response } from "express";

export const signupController = (req: Request, res: Response): void =>
{
    res.render("signup", { title: "CreateAccount" });
};
