import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/dashboard.css";
import { outfit } from "@/styles/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={outfit.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
