import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config/env";
import { pool } from "../db";
import type { Role } from "../types";



const auth = (...roles : Role[]) =>{
  return async (req:Request,res:Response,next:NextFunction)=>{
    console.log(roles);
  // console.log("This is protected route.");
  try {
    const token = req.headers.authorization;
  //Check for token
  if(!token){
   res.status(401).json({
    success: false,
    message: "Unauthorized Access!!"
   })
  }

  //2. Validating TOken
  const decoded = jwt.verify(token as string, config.secret_key) as JwtPayload;
  console.log(decoded);

  //3. Validating User data with DataBase

  const userData = await pool.query(`
    SELECT * FROM users WHERE email = $1
    `,[decoded.email])

  //Extracting User Data
  const user = userData.rows[0];

  if(userData.rows.length === 0){
    res.status(404).json({
    success: false,
    message: "User Not Found!!"
   })
  }

  if(!user.is_active){
    res.status(403).json({
    success: false,
    message: "Forbidden Access!!"
   })
  }

  if(roles.length && !roles.includes(user.role)){
    res.status(401).json({
    success: false,
    message: "Forbidden Access -- User not authorized to access!!"
   })
  }

  req.user = decoded;

  next();
  } catch (error) {
    next(error)
  }
}
}

export default auth;