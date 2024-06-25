import { PropsWithChildren } from 'react';
import { ThemeProvider } from './theme-provider';
import { ReactQueryProvider } from './react-query-provider';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
};
