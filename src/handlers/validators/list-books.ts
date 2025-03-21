import Joi from "joi";

export interface ListBooksFilters {
  priceMax?: number;
  name?: string;
}

export interface PaginationRequest {
  page: number;
  limit: number;
}

export const ListBooksValidation = Joi.object<
  ListBooksFilters & PaginationRequest
>({
  page: Joi.number().min(1).default(1),
  limit: Joi.number().min(1).max(100).default(10),
  priceMax: Joi.number().min(1),
  name: Joi.string(),
}).options({ abortEarly: false });
