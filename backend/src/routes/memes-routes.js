import { Router } from "express";

import { authMiddleware } from "../middleware/auth-middleware.js";

import {
  getMemes,
} from "../controllers/memes-controller.js";

const memesRouter = Router();

memesRouter.get("/memes", getMemes);


export default memesRouter;
