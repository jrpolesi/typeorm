import { AppDataSource } from "../data-source";
import { User } from "../entities";

export async function ListUsersService() {
  const usersRepository = AppDataSource.getRepository(User);

  const users = await usersRepository.find();

  return users;
}
