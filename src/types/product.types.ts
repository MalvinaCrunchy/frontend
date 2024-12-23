export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: {
    current: number;
    discount?: number;
    old?: number;
  };
  quantity: number;
  weight: {
    value: number;
    unit: 'г' | 'кг' | 'мл' | 'л';
  };
  country: string;
  imageUrl: string;
  category?: string;
  isNew?: boolean;
  rating?: number;
}

export interface IProductCardProps {
  product: IProduct;
  onAddToCart: (productId: number) => void;
  isLoading?: boolean;
}

export interface IProductListProps {
  products: IProduct[];
  isLoading?: boolean;
}

export interface IProductFilters {
  category?: string;
  country?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  isNew?: boolean;
}
