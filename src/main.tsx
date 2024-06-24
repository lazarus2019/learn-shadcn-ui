import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './providers/theme-provider.tsx';
import { MOCKING_DATA } from './configs/common.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Main = () => {
  return (
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
};

if (MOCKING_DATA === 'true') {
  import('@/__mocks__/browser')
    .then(async ({ worker }) => {
      await worker.start();
    })
    .then(() => root.render(<Main />));
} else {
  root.render(<Main />);
}
