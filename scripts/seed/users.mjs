import { PrismaClient } from "../../src/main/prisma";
import { randomUUID } from "node:crypto";

const prismaClient = new PrismaClient();

export const users = Object.freeze([
    Object.freeze({
        id: randomUUID(),
        name: "Tim Henson",
        password: "polyphia"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Keanu Reeves",
        password: "thematrix"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Simba",
        password: "thelionking"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Roger Smith",
        password: "americandad"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "John Wick",
        password: "bad#ss"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Kion",
        password: "thelionguard"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Porter Robinson",
        password: "potaro"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Zim",
        password: "invader"
    })
]);

export const seedUsers = async () =>
{
    for (const user of users)
    {
        await prismaClient.user.create({
            data: user
        });
    }
};

export default seedUsers;
