export const categoriesQueryKeys = {
  all: ['category'] as const,
  getListService: (params: any) =>
    [...categoriesQueryKeys.all, 'list', params] as const,
  getListIntroduction: (params: any) =>
    [...categoriesQueryKeys.all, 'introduction', params] as const,
};
