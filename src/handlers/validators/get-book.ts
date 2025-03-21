import Joi from "joi";

export const GetBookValidation = Joi.object<BookId>({
  id: Joi.number().required(),
});

export interface BookId {
  id: number;
}
