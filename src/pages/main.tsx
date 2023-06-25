import Head from "next/head";
import Footer from "@/components/footer";
import Dashboard from "@/components/dashboard";

export default function Main() {
  return (
    <>
      <Head>
        <title>ATAS Indonesia</title>
        <meta name="description" content="Laman Resmi" />
        <link rel="icon" href="/pavicon.io" />
      </Head>

      <Dashboard />

      <Footer />
    </>
  );
}
