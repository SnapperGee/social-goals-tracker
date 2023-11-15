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
        name: "Bjarne Stroustrup",
        password: "cplusplus"
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
        name: "Steve Jobs",
        password: "apple"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Linus Torvalds",
        password: "linux"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Bill Gates",
        password: "microsoft"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Porter Robinson",
        password: "potaro"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Ron Swanson",
        password: "parks&rec"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Zim",
        password: "invader"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Button Mash",
        password: "pony"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Tony Stark",
        password: "ironman"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Ron Burgundy",
        password: "anchorman"
    }),
    Object.freeze({
        id: randomUUID(),
        name: "Link",
        password: "zelda"
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
