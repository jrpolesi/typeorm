import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
  age: Joi.number().integer().min(0).max(150).required(),
});
