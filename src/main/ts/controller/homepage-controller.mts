import type { Request, Response } from "express";

export const homepageController = (req: Request, res: Response): void =>
{
    res.render("homepage", { title: "Blog" });
};
