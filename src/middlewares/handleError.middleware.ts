import { NextFunction, Request, Response } from "express";
import { CustomError } from "../models";

export function handleError(
  error: any,
  req: Request,
  res: Response,
  _: NextFunction
) {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).json({ message: "Internal Server Error" });
}
