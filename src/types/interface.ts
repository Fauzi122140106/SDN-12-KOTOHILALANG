/* eslint-disable @typescript-eslint/no-explicit-any */
import { AllowedValue } from "./types";

export type HTTPMethod = "POST" | "PUT" | "DELETE" | "PATCH";
export interface debounceInterface {
  value: string | undefined;
  delay: number;
}

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T; // Data can be any structure
}

export class APIError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number, data: any) {
    super(message);
    this.status = status;
    this.data = data;
    Object.setPrototypeOf(this, APIError.prototype); // penting untuk instanceof
  }
}

// Format 1: Paginated data
export interface DataPaginate<T> {
  total_items: number;
  page: number;
  items: T[];
  total_pages: number;
  links: Links;
}

export interface Links {
  prev: string | null;
  next: string | null;
}

export interface LoginPayload extends Record<string, AllowedValue> {
  email: string;
  password: string;
}

export interface LoginData {
  id: number;
  email: string;
  name: string;
  password: string;
  roleId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  role: {
    id: number;
    name: string;
  };
  token: string;
}
