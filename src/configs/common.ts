import { Theme } from '@/types/shadcn';

export const { VITE_MOCKING_DATA: MOCKING_DATA } = import.meta.env;

export const listTheme: Theme[] = [
  'dark',
  'light',
  'system',
  'green',
  'orange',
  'violet',
];

export const API_PREFIX = '';

export const apiEndpoints = {
  services: `${API_PREFIX}/services`,
  servicesCategory: `${API_PREFIX}/services-category`,
  servicesIntroduction: `${API_PREFIX}/services-introduction`,
};
