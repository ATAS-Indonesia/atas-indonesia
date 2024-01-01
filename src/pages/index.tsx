import FooterSection from '@/components/footer-section'
import TestimonySection from '@/components/testimony-section'
import Footer from "@/components/footer";
import Dashboard from "@/components/dashboard";
import SEO from "@/components/SEO";

export default function Main() {
  return (
    <>
      <SEO />

      <Dashboard />
        
      <TestimonySection />
      <FooterSection />

      <Footer />
    </>
  );
}
