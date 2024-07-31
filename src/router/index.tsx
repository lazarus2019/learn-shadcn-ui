/* eslint-disable react-refresh/only-export-components */
import { Layout } from '@/layout';
import { ErrorBoundary } from '@/pages/error-boundary';
import { getCategoryIntroduction } from '@/services/category/hook';
import { lazy } from 'react';
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/home'));
const NotFoundPage = lazy(() => import('@/pages/not-found'));
const NewsPage = lazy(() => import('@/pages/news'));
const AboutPage = lazy(() => import('@/pages/about'));

const appRouter: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
    loader: async () => {
      try {
        const response = await getCategoryIntroduction({
          service: 'user-segment',
        });

        const data = response.data;

        console.log({ response, data });

        if (!data) throw new Response('Not Found', { status: 404 });
        return null;
      } catch (error) {
        throw new Response('Bad request', { status: 400 });
      }
    },
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [...appRouter],
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/404',
    element: <NotFoundPage />,
  },
  { path: '*', element: <Navigate to="/404" replace /> },
]);
