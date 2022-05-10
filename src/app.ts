import "dotenv/config";
import express from "express";
import "express-async-errors";
import { usersRoutes } from "./routers";
import { handleError } from "./middlewares";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Data source initialized");
  })
  .catch((error) => {
    console.log("Error during data source initialization", error);
  });

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", usersRoutes);

app.use(handleError);

app.listen(PORT, () => {
  console.log("Server Running on port ", PORT);
});
