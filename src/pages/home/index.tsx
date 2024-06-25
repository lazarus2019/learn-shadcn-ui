import { useState } from 'react';

import viteLogo from '/vite.svg';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Calendar } from '@/components/ui/calendar';
import Scrollbar from '@/components/scrollbar';

function HomePage() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div>
      HomePage
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
      <Button>OK</Button>
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
