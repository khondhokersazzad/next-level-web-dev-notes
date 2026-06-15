import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import config from "./config/env";
import { initDB, pool } from "./db";

const app: Application = express();
const port = config.port;

app.use(express.json());



(
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "This is from localhost",
      Author: "zz",
    });
  }));

app.post("/api/users", async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;
  const result = await pool.query(
    `
    INSERT INTO users(name,email,password,age)
    VALUES($1,$2,$3,$4)
    RETURNING *
    `,
    [name, email, password, age],
  );

  res.status(201).json({
    message: "Data in inserted to Database",
    data: result.rows[0],
  });

  // console.log(result);
});

//All Users
app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
    
    SELECT * FROM users;
    
    `);

    res.status(201).json({
      success: true,
      message: "Users retrieves successfully",
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

//Single User
app.get("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await pool.query(
      `
      
        SELECT * FROM users WHERE id = $1
      `,
      [id],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({
      success: true,
      message : 'Users retrieves successfully',
      data : result.rows[0],
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Users not found" });
  }
});

//Updating Details

app.put("/api/users/:id",async(req: Request, res: Response)=>{
  const {id} = req.params;
  const {name, password, age, is_active} = req.body;
  // console.log({name, password, age, is_active});
  try {
    const result = await pool.query(`
  
    UPDATE users
    SET name = COALESCE($1,name) , 
    password = COALESCE($2,password), 
    age = COALESCE($3,age), 
    is_active = COALESCE($4,is_active)
    WHERE id = $5
     RETURNING *

    
    `,[name,password,age, is_active,id])

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(201).json({
      success: true,
      message : 'Users retrieves successfully',
      data : result.rows[0],
    })
  } catch (error) {
    res.status(404).json({ message: "Users not found" });
  }

    
})

//Deleting User

app.delete("/api/users/:id",async(req: Request,res: Response)=>{
  const {id} = req.params;
  try {
    const result = await pool.query(`
    DELETE FROM users WHERE id=$1  
      `,[id])


      if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

      res.status(201).json({
      success: true,
      message : 'Users Deleted successfully',
    })
  } catch (error) {
    res.status(404).json({ message: "Users not found" });
  }
})




export default app;
