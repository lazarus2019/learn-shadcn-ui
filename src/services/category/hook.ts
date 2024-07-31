import { QueryClient, UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { categoriesAPIs } from './api';
import { categoriesQueryKeys } from './constant';
import { CategoryGetListParams, CategoryListResponse } from './type';

export function useGetCategories<Data = CategoryListResponse>(
  params?: CategoryGetListParams,
  options?: Omit<
    UseQueryOptions<CategoryListResponse, AxiosError<Error, any>, Data>,
    'queryKey' | 'queryFn'
  >
) {
  const queryKey = categoriesQueryKeys.getListService(params);

  return useQuery<CategoryListResponse, AxiosError<Error, any>, Data>({
    queryKey,
    queryFn: () => categoriesAPIs.getList(params),
    ...options,
  });
}

export function useGetCategoryIntroduction<Data = CategoryListResponse>(
  params: CategoryGetListParams,
  options?: Omit<
    UseQueryOptions<CategoryListResponse, AxiosError<Error, any>, Data>,
    'queryKey' | 'queryFn'
  >
) {
  const queryKey = categoriesQueryKeys.getListIntroduction(params);

  return useQuery<CategoryListResponse, AxiosError<Error, any>, Data>({
    queryKey,
    queryFn: () => categoriesAPIs.getIntroduction(params),
    ...options,
  });
}

export function getCategoryIntroduction(params: CategoryGetListParams) {
  const queryClient = new QueryClient();
  const queryKey = categoriesQueryKeys.getListIntroduction(params);

  return queryClient.fetchQuery({
    queryKey,
    queryFn: () => categoriesAPIs.getIntroduction(params),
  });
}
