import { HeaderItem } from '@/components/header/config';

export type CategoryGetListParams = {
  service?: string;
};

export interface SuccessResponse<Data> {
  success: boolean;
  message: string;
  data: Data;
}

export type CategoryListResponse = SuccessResponse<HeaderItem[]>;
