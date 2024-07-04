import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import useMediaQuery, { mediaQueryBreakpoints } from '@/hooks/use-media-query';
import { Suspense, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  const [isOK, setIsOK] = useState(true);
  const isFoldOpen = useMediaQuery(mediaQueryBreakpoints.down('xs'));
  const isOverFold = useMediaQuery(mediaQueryBreakpoints.up('xs'));
  const isTablet = useMediaQuery(mediaQueryBreakpoints.down('xl'));
  const islargeDesktop = useMediaQuery(mediaQueryBreakpoints.up('xl'));
  return (
    <>
      {isOK && (
        <div>
          {islargeDesktop && <Header />}
          {isTablet && isOverFold && <Header type="Tablet" />}
          {isFoldOpen && <Header type="Mobile" />}
        </div>
      )}

      <button onClick={() => setIsOK(false)}>UNMount</button>

      <Link to="/">
        <Button>Back to Homepage</Button>
      </Link>
      <Suspense fallback={'Loading header...'}>
        <Outlet />
      </Suspense>
    </>
  );
};
