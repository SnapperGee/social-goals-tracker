import { compare as comparePasswordToHash } from "bcrypt";
import type { Request, Response } from "express";
import { prismaClient } from "../connection.mjs";

export const signinUser = async (req: Request, res: Response): Promise<void> =>
{
    const { name, password } = req.body;

    try
    {
        const existingUser = await prismaClient.user.findUnique({ where: { name } });

        const isAuthenticated = existingUser && await comparePasswordToHash(password, existingUser.password);

        if ( ! isAuthenticated)
        {
            res.render("login", { errorMessage: "Invalid credentials.", bootstrapClass: "text-danger fw-bold" });
        }
        else
        {
            req.session.user = { name };
            res.redirect("/homepage");
        }
    }
    catch (error)
    {
        console.error(error);
        res.status(500).send("Server Error");
    }
};

export const loginController = (req: Request, res: Response): void =>
{
    res.render("login", { title: "Blog" });
};
