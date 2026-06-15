import type { NextFunction, Request, Response } from "express";
import fs from "fs";

const logger =(req: Request, res: Response, next: NextFunction) => {
  console.log('Time:', Date.now());
  const log = `Method: ${req.method} | URL: ${req.url} | Time: ${new Date().toISOString()}\n`;

  fs.appendFile("logger.txt", log, (err) => {
    if (err) {
      console.error("Failed to write log:", err);
    }
  });
  next();
}

export default logger;