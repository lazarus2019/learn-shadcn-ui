import axiosInstance from '@/configs/axios';
import { HeaderItem, baseHeaderConfig } from './config';

export const getHeaderConfig = (servicesData: HeaderItem[]) => {
  const fullfilledServies = [...baseHeaderConfig];

  const result = fullfilledServies.map((item) => {
    if (item.title === 'Services') {
      const itemChildren = item?.children ?? [];
      return { ...item, children: [...itemChildren, ...servicesData] };
    }

    return item;
  });

  return result;
};

export const getAPIData = (
  endpoint: string,
  setData: (data: any) => void,
  params?: any
) => {
  axiosInstance.get(endpoint, { params }).then((response) => {
    setData(response.data);
  });
};
