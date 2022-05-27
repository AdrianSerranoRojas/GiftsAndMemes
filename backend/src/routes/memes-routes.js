import { Router } from "express";

import { authMiddleware } from "../middleware/auth-middleware.js";

import {
  getMemes,
  createMeme,
} from "../controllers/memes-controller.js";

const memesRouter = Router();

memesRouter.get("/memes", getMemes);
memesRouter.post("/memes", createMeme);


export default memesRouter;
