export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: any;
  description?: string;
}

export type { Product as ProductType };