import { Request, Response } from "express";
import { listOneUserService } from "../services";

export async function listOneUserController(req: Request, res: Response) {
  const id = req.params.id;

  const user = await listOneUserService(id);

  return res.json(user);
}
