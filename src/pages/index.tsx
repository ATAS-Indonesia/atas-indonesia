import Head from 'next/head'
import FooterSection from '@/components/footer-section'
import TestimonySection from '@/components/testimony-section'

export default function Home() {
  return (
    <>
      <Head>
        <title>ATAS Indonesia</title>
        <meta name="description" content="Laman resmi ATAS Indonesia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TestimonySection />
      <FooterSection />
    </>
  )
}
