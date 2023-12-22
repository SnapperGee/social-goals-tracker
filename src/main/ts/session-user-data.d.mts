import type { SessionData } from "express-session";

declare module 'express-session' {
    export interface SessionData {
      name: { [key: string]: any };
    }
  }