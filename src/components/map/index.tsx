import { useGetCategoryIntroduction } from '@/services/category/hook';
import { useEffect, useLayoutEffect } from 'react';
export const MapLocale = () => {
  const {
    data: queryData,
    isLoading,
    isFetching,
  } = useGetCategoryIntroduction({
    service: 'dev-tools',
  });
  useEffect(() => {
    console.log('MapLocale:::useEffect:::IN');

    return () => {
      console.log('MapLocale:::useEffect:::CLEANUP');
    };
  }, []);

  useLayoutEffect(() => {
    console.log('MapLocale:::useLayoutEffects:::IN');

    return () => {
      console.log('MapLocale:::useLayoutEffects:::CLEANUP');
    };
  }, []);

  console.log({ queryData, isLoading, isFetching });

  return <div>MapLocale</div>;
};
