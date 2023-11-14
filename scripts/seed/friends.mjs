import { users } from "./users.mjs";
import { PrismaClient } from "../../src/main/prisma";

const getRandomClient = (indexToExclude) => users.filter((_, index) => index !== indexToExclude)[Math.floor(Math.random() * users.length - 1)];

const prismaClient = new PrismaClient();

export const friends = Object.freeze(users.filter((_, index) => index % 3 === 0).map((user, index) =>
    Object.freeze({
        source: user.id,
        target: getRandomClient(index).id
    })
));

export const seedFriends = async () =>
{
    for (const friend of friends)
    {
        await prismaClient.friends.create({
            data: friend
        });
    }
};

export default seedFriends;
