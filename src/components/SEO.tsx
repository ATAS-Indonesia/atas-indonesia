import Head from "next/head";

function SEO() {
  return (
    <Head>
      <title>ATAS Indonesia</title>
      <meta
        name="description"
        content="Laman Resmi ATAS Chapter Indonesia. Persaudaraan Pramuka Garuda Tingkat Dunia cabang Indonesia"
      />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content="ATAS Indonesia" />
      <meta
        property="og:description"
        content="Laman Resmi ATAS Chapter Indonesia. Persaudaraan Pramuka Garuda Tingkat Dunia cabang Indonesia"
      />
      <meta property="og:image" content="/images/management_atas.svg" />
      <meta property="og:url" content="https://atasindonesia.org" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@atasindonesia" />
      <meta name="twitter:title" content="ATAS Indonesia" />
      <meta
        name="twitter:description"
        content="Laman Resmi ATAS Chapter Indonesia. Persaudaraan Pramuka Garuda Tingkat Dunia cabang Indonesia"
      />
      <meta name="twitter:image" content="/images/management_atas.svg" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}

export default SEO;
