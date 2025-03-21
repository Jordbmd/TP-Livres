import express from "express";
import { AppDataSource } from "./db/database";
import { initHandlers } from "./handlers/handler";

const app = express();
const port = 3000;

app.use(express.json());
initHandlers(app);

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("Database connection error:", error));
