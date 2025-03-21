import { Request, Response } from "express";
import { AppDataSource } from "../db/database";
import { Book } from "../db/models/book";
import { BookIdValidation } from "./validators/book-id";
import { CreateBookValidation } from "./validators/create-book";
import { generateValidationErrorMessage } from "./validators/generate-validation-message";
import { ListBooksValidation } from "./validators/list-books";
import { BookUpdateValidation } from "./validators/update-book";

export const createBookHandler = async (req: Request, res: Response) => {
  try {
    const validation = CreateBookValidation.validate(req.body);
    if (validation.error) {
      res
        .status(400)
        .send(generateValidationErrorMessage(validation.error.details));
      return;
    }

    const createBookRequest = validation.value;
    const bookRepository = AppDataSource.getRepository(Book);
    const book = bookRepository.create({ ...createBookRequest });
    const bookCreated = await bookRepository.save(book);

    res.status(201).send(bookCreated);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Internal error: ${error.message}`);
    }
    res.status(500).send({ message: "internal error" });
  }
};

export const listBookHandler = async (req: Request, res: Response) => {
  try {
    const validation = ListBooksValidation.validate(req.query);
    if (validation.error) {
      return res
        .status(400)
        .send(generateValidationErrorMessage(validation.error.details));
    }

    const listBookRequest = validation.value;
    const query = AppDataSource.createQueryBuilder(Book, "book");

    // Filtrage par nom
    if (listBookRequest.name) {
      query.andWhere("book.name ILIKE :name", {
        name: `%${listBookRequest.name}%`,
      });
    }

    // Pagination
    query.skip((listBookRequest.page - 1) * listBookRequest.limit);
    query.take(listBookRequest.limit);

    const [books, totalCount] = await query.getManyAndCount();

    const page = listBookRequest.page;
    const totalPages = Math.ceil(totalCount / listBookRequest.limit);

    res.send({
      data: books,
      page_size: listBookRequest.limit,
      page,
      total_count: totalCount,
      total_pages: totalPages,
    });
  } catch (error) {
    console.error("Error listing books:", error);
    res.status(500).send({ message: "internal error" });
  }
};

export const detailedBookHandler = async (req: Request, res: Response) => {
  try {
    const validation = BookIdValidation.validate(req.params);
    if (validation.error) {
      res
        .status(400)
        .send(generateValidationErrorMessage(validation.error.details));
      return;
    }

    const getBookRequest = validation.value;
    const bookRepository = AppDataSource.getRepository(Book);
    const book = await bookRepository.findOne({
      where: { id: getBookRequest.id },
    });
    if (book === null) {
      res.status(404).send({ message: "resource not found" });
      return;
    }

    res.status(200).send(book);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Internal error: ${error.message}`);
    }
    res.status(500).send({ message: "internal error" });
  }
};

export const updateBookHandler = async (req: Request, res: Response) => {
  try {
    const validation = BookUpdateValidation.validate({
      ...req.params,
      ...req.body,
    });
    if (validation.error) {
      res
        .status(400)
        .send(generateValidationErrorMessage(validation.error.details));
      return;
    }

    const updateBook = validation.value;
    const bookRepository = AppDataSource.getRepository(Book);
    const bookFound = await bookRepository.findOneBy({
      id: updateBook.id,
    });
    if (bookFound === null) {
      res.status(404).send({ error: `book ${updateBook.id} not found` });
      return;
    }

    // Mettez à jour les champs nécessaires
    if (updateBook.price) {
      bookFound.price = updateBook.price;
    }

    const bookUpdate = await bookRepository.save(bookFound);
    res.status(200).send(bookUpdate);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal error" });
  }
};

export const deleteBookHandler = async (req: Request, res: Response) => {
  try {
    const validation = BookIdValidation.validate({
      ...req.params,
    });
    if (validation.error) {
      res
        .status(400)
        .send(generateValidationErrorMessage(validation.error.details));
      return;
    }

    const deleteBookRequest = validation.value;
    const bookRepository = AppDataSource.getRepository(Book);
    const bookFound = await bookRepository.findOneBy({
      id: deleteBookRequest.id,
    });
    if (bookFound === null) {
      res.status(404).send({ error: `book ${deleteBookRequest.id} not found` });
      return;
    }

    const bookDeleted = await bookRepository.remove(bookFound);
    res.status(200).send(bookDeleted);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal error" });
  }
};
