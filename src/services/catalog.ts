import axiosInstance from '@/services/axios';
import { ApiRoutes } from '@/services/constants';

import { ProductPage } from '@/types/api';

export const getProducts = async ({
  page,
  size,
  category_id,
  has_discount,
}: {
  page: number;
  size: number;
  category_id?: number;
  has_discount?: boolean;
}): Promise<ProductPage> => {
  return (
    await axiosInstance.get<ProductPage>(ApiRoutes.CATALOG, {
      params: {
        page,
        size,
        category_id,
        has_discount,
      },
    })
  ).data;
};

export const getNewProducts = async ({
  page,
  size,
  category_id,
  has_discount,
}: {
  page: number;
  size: number;
  category_id?: number;
  has_discount?: boolean;
}): Promise<ProductPage> => {
  return (
    await axiosInstance.get<ProductPage>(ApiRoutes.CATALOG, {
      params: {
        page,
        size,
        category_id,
        has_discount,
      },
    })
  ).data;
};
