import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import config from "./config/env";
import { initDB, pool } from "./db";
import { userRouter } from "./modules/user/user.routes";
import { profileRouter } from "./modules/profile/profile.routes";
import { authRouter } from "./modules/auth/auth.route";
import fs from "fs";
import logger from "./middleware/logger";


const app: Application = express();
const port = config.port;



app.use(express.json());

//Custom MiddleWare
app.use(logger);

(
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "This is from localhost",
      Author: "zz",
    });
  }));

app.use('/api/users',userRouter);
app.use('/api/profiles',profileRouter);
app.use('/api/auth', authRouter);









export default app;
