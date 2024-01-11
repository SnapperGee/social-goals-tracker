import type { SessionData } from "express-session";

declare module "express-session"
{
    export interface SessionData
    {
        user: { id: string; name: string } | null;
    }
}
