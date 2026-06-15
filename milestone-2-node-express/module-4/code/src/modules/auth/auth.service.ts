import bcrypt from "bcryptjs";
import { pool } from "../../db";
import jwt from "jsonwebtoken";
import config from "../../config/env";

const loginUserIntoDB = async (payload: {
  email: string;
  password: string;
}) => {
  const { email, password } = payload;
  //1.check if user exist
  //2.compare the password
  //3.Generate the token

  //1. Find userdata from database
  const userData = await pool.query(
    `
    SELECT * FROM users WHERE email = $1  
    `,[email],
  )

  if (userData.rows.length === 0) {
  throw new Error("User not found");
}
  const user = userData.rows[0];
  // console.log(user);

  //2.compare the password
  const matchPass = await bcrypt.compare(String(password), user.password);
  // console.log(matchPass);
  if(!matchPass){
  throw new Error("Invalid Credentials");
  }
  // 3. Generate Token 

  const jwtPayload = {
    id: user.id,
    name: user.name,
    is_active: user.is_active,
    email: user.email
  }

  const accessToken = jwt.sign(jwtPayload,config.secret_key, {
    expiresIn : "1d"
  })
  return {accessToken}

};

export const authService = {
  loginUserIntoDB,
};
