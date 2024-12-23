import axiosInstance from '@/services/axios';
import { ApiRoutes } from '@/services/constants';

import { Brand } from '@/types/api';

export const getBrands = async (): Promise<Brand[]> => {
  return (await axiosInstance.get<Brand[]>(ApiRoutes.BRANDS)).data;
};
