import Joi from "joi";

export const userUpdateSchema = Joi.object({
  name: Joi.string().alphanum(),
  email: Joi.string().email(),
  password: Joi.string().min(3),
  age: Joi.number().integer().min(0).max(150),
});
