import { AgencyList } from '@/components/agency';
import { MapLocale } from '@/components/map';
import { useEffect, useLayoutEffect, useState } from 'react';

function AboutPage() {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    console.log('AboutPage:::useEffect:::IN');
    performance.mark('effect:start');
    let done = false;
    if (!done) {
      setTimeout(() => {
        console.log('REMOVE====');
        setIsShow(false);
      }, 3000);
    }
    performance.mark('effect:end');
    performance.measure('effect', 'effect:start', 'effect:end');
    return () => {
      console.log('AboutPage:::useEffect:::CLEANUP');

      done = true;
    };
  }, []);

  useLayoutEffect(() => {
    console.log('AboutPage:::useLayoutEffects:::IN');

    return () => {
      console.log('AboutPage:::useLayoutEffects:::CLEANUP');
    };
  }, []);

  return (
    <div>
      AboutPage
      {isShow && (
        <>
          <AgencyList />
          <MapLocale />
        </>
      )}
    </div>
  );
}

export default AboutPage;
