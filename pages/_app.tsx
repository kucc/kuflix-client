import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: {
    staleTime: Infinity,
    cacheTime: Infinity,
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* DEV ONLY */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Component {...pageProps} />{' '}
    </QueryClientProvider>
  );
}
