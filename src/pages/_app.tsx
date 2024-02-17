import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/dashboard.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { outfit } from "@/styles/fonts";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={outfit.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
