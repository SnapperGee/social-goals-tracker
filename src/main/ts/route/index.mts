import { homepageRouter } from "./homepage-route.mjs";
import { Router } from "express";

export const router = Router();

router.use(homepageRouter);

export default router;
