import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import userRouter from "./routes/user-routes.js";
import memesRouter from "./routes/memes-routes.js";

import config from "./config/config.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "2500mb" }));

app.use(userRouter);
app.use(memesRouter);

export default app;