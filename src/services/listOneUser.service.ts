import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { CustomError } from "../models";

export async function listOneUserService(id: string) {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new CustomError("User not found");
  }

  return user;
}
