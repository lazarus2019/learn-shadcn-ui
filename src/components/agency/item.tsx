import { useEffect, useLayoutEffect } from 'react';

type AgencyItemProps = {
  no: number;
};

export const AgencyItem = ({ no }: AgencyItemProps) => {
  useEffect(() => {
    console.log('AgencyItem:::useEffect:::IN', no);

    return () => {
      console.log('AgencyItem:::useEffect:::CLEANUP', no);
    };
  }, [no]);

  useLayoutEffect(() => {
    console.log('AgencyItem:::useLayoutEffects:::IN', no);

    return () => {
      console.log('AgencyItem:::useLayoutEffects:::CLEANUP', no);
    };
  }, [no]);

  return <div>AgencyItem {no}</div>;
};
