import Joi from "joi";

export interface UpdateBookRequest {
  id: number;
  name?: string;
  author?: string;
  numberOfVolumes?: number;
  price?: number;
  rating?: number;
  publicationDate?: Date;
}

export const BookUpdateValidation = Joi.object<UpdateBookRequest>({
  id: Joi.number().required(),
  price: Joi.number().min(1),
  rating: Joi.number().min(1).max(5),
  publicationDate: Joi.date(),
  name: Joi.string(),
  author: Joi.string(),
  numberOfVolumes: Joi.number().integer().min(1),
});
