import Joi from "joi";

export interface UpdateBookRequest {
  id: number;
  price?: number;
}

export const BookUpdateValidation = Joi.object<UpdateBookRequest>({
  id: Joi.number().required(),
  price: Joi.number().min(1),
});
