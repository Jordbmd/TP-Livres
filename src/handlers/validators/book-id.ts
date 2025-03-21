import Joi from "joi";

export const BookIdValidation = Joi.object<BookId>({
  id: Joi.number().required(),
});

export interface BookId {
  id: number;
}
