import { users } from "./users.mjs";
import { PrismaClient } from "../../src/main/prisma";
import { randomUUID } from "node:crypto";

const prismaClient = new PrismaClient();

export const goals = Object.freeze(users.map((user, index) =>
    Object.freeze(index % 2 === 0 ? {
        id: randomUUID(),
        title: `${user.name}'s Goal Title`,
        private: index % 3 === 0,
        user_id: user.id
    }
    : {
        id: randomUUID(),
        title: `${user.name}'s Goal Title`,
        description: `${user.name}'s goal description.`,
        private: index % 3 === 0,
        user_id: user.id
    })
));

export const seedGoals = async () =>
{
    for (const goal of goals)
    {
        await prismaClient.goal.create({
            data: goal
        });
    }
};

export default seedGoals;
