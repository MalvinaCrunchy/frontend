import axiosInstance from '@/services/axios';
import { ApiRoutes } from '@/services/constants';
import axios, { AxiosResponse } from 'axios';

export const getPriceList = async (): Promise<AxiosResponse<ArrayBuffer>> => {
  try {
    const response = await axiosInstance.get<ArrayBuffer>(`${ApiRoutes.PRICE_LIST}`, {
      responseType: 'arraybuffer',
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', error.toJSON());
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};
