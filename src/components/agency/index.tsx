import { useEffect, useLayoutEffect } from 'react';
import { AgencyItem } from './item';

export const AgencyList = () => {
  useEffect(() => {
    console.log('AgencyList:::useEffect:::IN');

    return () => {
      console.log('AgencyList:::useEffect:::CLEANUP');
    };
  }, []);

  useLayoutEffect(() => {
    console.log('AgencyList:::useLayoutEffects:::IN');

    return () => {
      console.log('AgencyList:::useLayoutEffects:::CLEANUP');
    };
  }, []);
  return (
    <div>
      {Array(5)
        .fill({})
        .map((_, idx) => (
          <AgencyItem key={idx} no={idx + 1} />
        ))}
    </div>
  );
};
