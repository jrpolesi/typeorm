import { Request, Response } from "express";
import { userCreateService } from "../services";

export async function userCreateController(req: Request, res: Response) {
  const newUser = await userCreateService(req.body);

  return res.status(201).json({ message: "User created", user: newUser });
}
