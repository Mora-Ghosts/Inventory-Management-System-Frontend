export interface ProductType {
  pid?: number; // Optional, as it might not exist before creation
  categoryId: number|null;
  brand: string;
  model: string;
  color: string;
}
