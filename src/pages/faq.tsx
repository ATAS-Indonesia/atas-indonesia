import Head from 'next/head'
import FooterSection from '@/components/footer-section'
import FaqSection from '@/components/faq-section'

export default function FaQ() {
    return (
        <>
            <Head>
                <title>FaQ</title>
                <meta name="description" content="Laman pusat bantuan ATAS Indonesia" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <FaqSection />
            <FooterSection />
        </>
    )
}
