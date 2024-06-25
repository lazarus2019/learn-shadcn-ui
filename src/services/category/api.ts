import axiosInstance from '@/configs/axios';
import { apiEndpoints } from '@/configs/common';
import { CategoryListResponse } from './type';

export const categoriesAPIs = {
  getList: (params: any): Promise<CategoryListResponse> => {
    return axiosInstance.get(apiEndpoints.services, {
      params,
    });
  },
  getIntroduction: (params: any): Promise<CategoryListResponse> => {
    return axiosInstance.get(apiEndpoints.servicesIntroduction, {
      params,
    });
  },
};
