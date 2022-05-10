import { Request, Response } from "express";
import { deleteUserService } from "../services";

export async function deleteUserController(req: Request, res: Response) {
  const id = req.params.id;

  const deletedUser = await deleteUserService(id);

  return res.json({ message: "User deleted", user: deletedUser });
}
