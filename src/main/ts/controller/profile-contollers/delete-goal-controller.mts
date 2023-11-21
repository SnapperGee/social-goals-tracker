// import { prismaClient } from "../../connection.mjs";
// import type { Request, Response } from "express";

// export const deleteGoal = async (req: Request, res: Response): Promise<void> =>
// {
//     try
//     {
//         const { goalId } = req.params;
//         await prismaClient.goal.delete({ where: { id: goalId } });
//         res.redirect(`/profile/:${req.session.userId}`);
//     }
//     catch (error)
//     {
//         res.status(500).json(error);
//     }
// };


// export const goalDeleteController = Object.freeze({
//     deleteGoal
// });

// export default goalDeleteController;