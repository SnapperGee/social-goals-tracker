import { users } from "./users.mjs";
import { prismaClient } from "../../src/main/js/connection.mjs";
import { randomUUID } from "node:crypto";

export const goals = Object.freeze(users.map((user, index) =>
    Object.freeze({
        id: randomUUID(),
        title: `${user.name}'s Goal Title`,
        accomplished: Math.random() < 0.5,
        private: Math.random() < 0.5,
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
