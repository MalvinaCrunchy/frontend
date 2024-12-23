export interface Product {
  name: string;
  article: string;
  amount: number;
  price: number;
  volume: number;
  expiry: string;
  brand: string;
  country: string;
  category_id: number;
  description: string;
  compotition: string;
  image_url: string;
  price: number;
  volume: number;
  discount: number;
  id: number;
  final_price: number;
}

export interface MetaInfo {
  page: number;
  size: number;
  total_pages: number;
  total_len: number;
  has_next: boolean;
}

export interface ProductPageMeta {
  page: number;
  description: string;
}

export interface Categories {
  id: number;
  name: string;
}

export interface ProductPage {
  products: Product[];
  meta: ProductPageMeta;
  all_categories?: Categories[];
}

interface ErrorResponse {
  detail: {
    loc: [string, number];
    msg: string;
    type: string;
  }[];
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  first_name: string;
  last_name: string;
  birthday: string;
  profile_picture?: string;
}

interface RegisterResponse {
  id: number;
  username: string;
}

interface LoginRequest {
  username: string;
  password: string;
  grant_type?: string;
  scope?: string;
  client_id?: string;
  client_secret?: string;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
}
