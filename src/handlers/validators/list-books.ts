import Joi from "joi";

export interface PaginationRequest {
  page: number;
  limit: number;
}

export const ListBooksValidation = Joi.object<PaginationRequest>({
  page: Joi.number().min(1).default(1),
  limit: Joi.number().min(1).max(100).default(10),
}).options({ abortEarly: false });
