import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/dashboard.css";
import "../styles/footer.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
