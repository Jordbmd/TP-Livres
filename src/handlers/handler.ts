import { Application, Request, Response } from "express";
import {
  createBookHandler,
  deleteBookHandler,
  detailedBookHandler,
  listBookHandler,
  updateBookHandler,
} from "./book";

export const initHandlers = (app: Application) => {
  app.get("/health", (_: Request, res: Response) => {
    res.send({ message: "ping" });
  });

  app.get("/books", listBookHandler);
  app.get("/books/:id", detailedBookHandler);
  app.post("/books", createBookHandler);
  app.patch("/books/:id", updateBookHandler);
  app.delete("/books/:id", deleteBookHandler);
};
