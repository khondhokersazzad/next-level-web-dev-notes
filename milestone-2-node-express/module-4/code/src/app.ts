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


const app: Application = express();
const port = config.port;

app.use(express.json());
app.use('/api/users',userRouter);
app.use('/api/profiles',profileRouter);
app.use('/api/auth', authRouter);

//MiddleWare
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  const log = `Method -> ${req.method} Time -> ${Date.now()} URL -> ${req.url}`
  fs.appendFile("logger.txt",log, (err)=>{
    console.log(err);
  })
  next();
});

(
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "This is from localhost",
      Author: "zz",
    });
  }));





export default app;
