import { PrismaClient } from "../prisma/index.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const prismaClient = new PrismaClient().$extends({
    query: {
        user: {
            async create({args, query})
            {
                args.data.password = await bcrypt.hash(args.data.password, SALT_ROUNDS);
                return query(args);
            },
            async update({args, query})
            {
                if (typeof args.data.password === "string")
                {
                    args.data.password = await bcrypt.hash(args.data.password, SALT_ROUNDS);
                }

                return query(args);
            }
        }
    }
});

export default prismaClient;
