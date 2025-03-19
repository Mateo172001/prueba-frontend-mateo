export type Product = {
  id: number;
  code: number;
  name: string;
  description: string;
  quantity: number;
  createdAt: string;
};

export type SortField = "code" | "name" | "quantity" | "createdAt";
export type SortDirection = "asc" | "desc";

export type ProductFormData = Omit<Product, "id" | "createdAt">;