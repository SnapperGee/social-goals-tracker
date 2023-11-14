import { goals } from "./goals.mjs";
import { PrismaClient } from "../../src/main/prisma";
import { randomUUID } from "node:crypto";

const prismaClient = new PrismaClient();

export const milestones = Object.freeze(goals.map((goal, index) =>
    Object.freeze(index % 2 === 0 ? {
        id: randomUUID(),
        title: `${goal.title} Milestone Title`,
        goal_id: goal.id
    }
    : {
        id: randomUUID(),
        title: `${goal.title} Milestone Title`,
        description: `${goal.title}'s milestone description.`,
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
