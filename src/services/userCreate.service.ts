import { CustomError } from "../models";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import bcrypt from "bcryptjs";
import { UserCreateService } from "../interfaces";

export async function userCreateService({
  name,
  email,
  password,
  age,
}: UserCreateService) {
  const userRepository = AppDataSource.getRepository(User);

  const userAlreadyExists = await userRepository.findOneBy({ email });

  if (userAlreadyExists) {
    throw new CustomError("Email already exists");
  }

  const hash = await bcrypt.hash(password, 10);

  const user = new User();

  user.name = name;
  user.email = email;
  user.age = age;
  user.password = hash;

  userRepository.create(user);

  await userRepository.save(user);

  const { password: _, ...userWithoutPassword } = user;

  return userWithoutPassword;
}
