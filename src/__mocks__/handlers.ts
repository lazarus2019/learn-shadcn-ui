import { apiEndpoints } from '@/configs/common';
import { HttpResponse, delay, http } from 'msw';
import {
  listCategoryMock,
  listServiceIntroductionMock,
} from './db/services-mock';

export const handlers = [
  http.get(apiEndpoints.services, async () => {
    const data = listCategoryMock();

    await delay(2000);

    return HttpResponse.json({
      success: true,
      message: 'Get list category successfully',
      data,
    });
  }),
  http.get(apiEndpoints.servicesIntroduction, async ({ request }) => {
    const url = new URL(request.url);

    const service = url.searchParams.get('service');

    const data = listServiceIntroductionMock(service as string);

    await delay(2000);

    return HttpResponse.json({
      success: true,
      message: 'Get service category successfully',
      data,
    });
  }),
];
