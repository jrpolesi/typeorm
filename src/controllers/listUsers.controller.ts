import { Request, Response } from "express";
import { ListUsersService } from "../services";

export async function listUsersController(req: Request, res: Response) {
  const users = await ListUsersService();

  return res.json(users);
}
