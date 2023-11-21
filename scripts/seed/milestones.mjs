import { goals } from "./goals.mjs";
import { prismaClient } from "../../src/main/js/connection.mjs";
import { randomUUID } from "node:crypto";

export const milestones = Object.freeze(goals.map((goal, index) =>
    Object.freeze({
        id: randomUUID(),
        title: `${goal.title} Milestone Title`,
        complete: Math.random() < 0.5,
        goal_id: goal.id
    })
));

export const seedMilestones = async () =>
{
    for (const milestone of milestones)
    {
        await prismaClient.milestone.create({
            data: milestone
        });
    }
};

export default seedMilestones;
