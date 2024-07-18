import { useCallback, useEffect, useState, useTransition } from 'react';

import viteLogo from '/vite.svg';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Calendar } from '@/components/ui/calendar';
import Scrollbar from '@/components/scrollbar';
import { TempComponent } from '@/components/temp';
import { useBeforeUnload } from 'react-router-dom';
import { Popover } from '@/components/popover';
import { Menu } from '@/components/popover/menu';

function HomePage() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [state, setState] = useState(null);

  const [showDialog, setShowDialog] = useState(false);
  // const transitions = useTransition(showDialog, {
  //   from: { opacity: 0, y: -10 },
  //   enter: { opacity: 1, y: 0 },
  //   leave: { opacity: 0, y: 10 },
  // });

  useBeforeUnload(
    useCallback(() => {
      localStorage.stuff = state;
      console.log('useBeforeUnload');
    }, [state])
  );

  useEffect(() => {
    if (state === null && localStorage.stuff != null) {
      setState(localStorage.stuff);
    }

    const onLoad = (e) => {
      e.preventDefault();
      // e.returnValue = '';
      console.log('onLoad', e);
    };

    const onLoadTemp = (e) => {
      e.preventDefault();
      // e.returnValue = '';
      console.log('onLoad TEMP', e);
    };

    window.addEventListener('beforeunload', onLoad);
    window.addEventListener('unload', onLoadTemp);

    return () => {
      window.removeEventListener('unload', onLoadTemp);
      window.removeEventListener('beforeunload', onLoad);
    };
  }, [state]);

  return (
    <div>
      HomePage
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        minus adipisci sed itaque ad, iure nesciunt veritatis, possimus eaque
        fuga <span>labore dolores veniam suscipit molestiae ipsam</span>,
        dolorum neque et! Veniam recusandae, inventore esse unde sunt, corporis
        ducimus dolor quaerat rerum provident consectetur aperiam quas culpa,
        mollitia sed accusantium similique minus!
      </p>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TempComponent />
      <Button>OK</Button>
      {/* <Popover /> */}
      <Menu />
      <ModeToggle />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Scrollbar />
    </div>
  );
}

export default HomePage;
