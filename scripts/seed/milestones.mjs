import { goals } from "./goals.mjs";
import { prismaClient } from "../../src/main/js/connection.mjs";
import { randomUUID } from "node:crypto";

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
