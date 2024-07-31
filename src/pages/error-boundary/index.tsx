import { useEffect, useState } from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
  const error = useRouteError();
  console.log({ error });

  const [open, setOpen] = useState(true);

  useEffect(() => {
    const parent = document.getElementById('parent');

    if (!parent) return;

    for (const myEl of parent.childNodes) {
      if (myEl.nodeType === Node.TEXT_NODE) {
        const fontEl = document.createElement('font');
        fontEl.textContent = myEl.data;

        if (!myEl.parentElement) return;

        myEl.parentElement.insertBefore(fontEl, myEl);
        myEl.parentElement.removeChild(myEl);
      }
    }
  }, []);

  return (
    <div>
      <h1>Error on `removeChild`</h1>
      Check this checkbox:{' '}
      <input
        type="checkbox"
        checked={open}
        onChange={(e) => setOpen(e.target.checked)}
      />
      {open && 'ffsdfsd'}
      <button onClick={() => setOpen((prev) => !prev)}>toggle</button>
      <div id="parent">
        {open && 'not checked'}
        <p>Hello</p>
      </div>
    </div>
  );
};
