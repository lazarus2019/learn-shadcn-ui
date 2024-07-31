import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1_000 * 5,
      gcTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};
