import Joi from "joi";

export interface CreateBookRequest {
  name: string;
  author: string;
  numberOfVolumes: number;
  price: number;
  rating: number;
  publicationDate: Date;
}

export const CreateBookValidation = Joi.object<CreateBookRequest>({
  name: Joi.string().required(),
  author: Joi.string().required(),
  numberOfVolumes: Joi.number().integer().min(1).required(),
  price: Joi.number().positive().required(),
  rating: Joi.number().integer().min(1).max(5).required(),
  publicationDate: Joi.date().required(),
}).options({ abortEarly: false });
