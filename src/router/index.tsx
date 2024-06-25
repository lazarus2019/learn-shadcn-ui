import { Layout } from '@/layout';
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
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [...appRouter],
  },
  {
    path: '/404',
    element: <NotFoundPage />,
  },
  { path: '*', element: <Navigate to="/404" replace /> },
]);
