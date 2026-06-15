import { pool } from "../../db";

const createProfileIntoDB = async(payload : any) =>{

  // console.log(payload);

  const {user_id, bio , phone , gender } = payload;

  //Check if user exist 

  const user = await pool.query(`
    SELECT * FROM users WHERE id = $1  
    `,[user_id])

    console.log(user);

  //IF user not found
  if(user.rows.length === 0 ){
    throw new Error ("Users Not Exist");
  }

  //Inserting data to profile table
  const result = await pool.query(`
    INSERT INTO profiles(user_id, bio , phone , gender) VALUES($1,$2,$3,$4,$5) RETURNING *
    `,[user_id, bio , phone , gender]);

  return result;


}

export const profileService = {
  createProfileIntoDB,
}