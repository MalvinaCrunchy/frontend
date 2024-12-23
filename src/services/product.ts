import axiosInstance from '@/services/axios';
import { ApiRoutes } from '@/services/constants';

import { Product } from '@/types/api';

export const getProductById = async (id: string): Promise<Product> => {
  return (await axiosInstance.get<Product>(`${ApiRoutes.CATALOG}/${id}`)).data;
};
