import type { Request, Response } from "express";
import { pool } from "../../db";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const result = await userService.createUserIntoDB(req.body);
  res.status(201).json({
    message: "Data is inserted to Database",
    data: result.rows[0],
  });
};

//AllUser
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUserFromDB();

    res.status(201).json({
      success: true,
      message: "Users retrieves successfully",
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
};

//Single User
const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await userService.getSingleUserFromDB(id as string);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({
      success: true,
      message: "Users retrieves successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Users not found" });
  }
};

//Updating User
const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.updateUserIntoDB(req.body, id as string);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(201).json({
      success: true,
      message: "Users retrieves successfully",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(404).json({ message: "Users not found" });
  }
};

//Delete User

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.deleteUserFromDB(id as string);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(201).json({
      success: true,
      message: "Users Deleted successfully",
    });
  } catch (error) {
    res.status(404).json({ message: "Users not found" });
  }
};

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
