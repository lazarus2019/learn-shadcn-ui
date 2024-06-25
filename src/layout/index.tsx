import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Link to="/">
        <Button>Back to Homepage</Button>
      </Link>
      <Suspense fallback={'Loading header...'}>
        <Outlet />
      </Suspense>
    </>
  );
};
