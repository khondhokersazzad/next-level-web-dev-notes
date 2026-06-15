import { Router, type Request, type Response } from "express";
import { pool } from "../../db";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";

const router = Router();




//Create User
router.post("/", userController.createUser);

//All Users
router.get("/", auth(), userController.getAllUser);

//Single User
router.get("/:id", userController.getSingleUser);

//Update User

router.put("/:id", userController.updateUser);

//Delete User

router.delete("/:id", userController.deleteUser);

export const userRouter = router;
