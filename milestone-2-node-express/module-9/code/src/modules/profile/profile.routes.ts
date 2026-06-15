import { Router } from "express";
import { profileController } from "./profile.controller";

const router = Router();

export const profileRouter = router;

//Create Profile

router.post('/',profileController.createProfile);