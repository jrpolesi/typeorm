import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { CustomError } from "../models";

export function validateData(schema: ObjectSchema<any>) {
  return (req: Request, _: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      throw new CustomError(error.message);
    }

    next();
  };
}
