import { Router } from "express";
import { userSchema, userUpdateSchema } from "../models";
import { validateData } from "../middlewares";
import {
  deleteUserController,
  listOneUserController,
  listUsersController,
  updateUserController,
  userCreateController,
} from "../controllers";

const router = Router();

router.post("", validateData(userSchema), userCreateController);
router.get("", listUsersController);
router.get("/:id", listOneUserController);
router.delete("/:id", deleteUserController);
router.patch("/:id", validateData(userUpdateSchema), updateUserController);

export default router;
