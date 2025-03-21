import path from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "mydatabase",
  logging: true,
  synchronize: true,
  entities: [path.join(__dirname, "../models/*.ts")],
});
