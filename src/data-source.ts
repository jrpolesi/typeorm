import { DataSource } from "typeorm";
import { User } from "./entities";
import "reflect-metadata";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  synchronize: false,
  migrations: ["src/migrations/*.ts"],
  logging: true,
  entities: [User],
});
