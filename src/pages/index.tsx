import SEO from "@/components/SEO";
import { Header } from "@/components/widgets/header";
import { Blog } from "@/components/widgets/blog";
import { Committee } from "@/components/widgets/committee";
import { Footer } from "@/components/widgets/footer";

export default function Main() {
  return (
    <>
      <SEO />

      <Header />
      <Committee />
      <Blog />

      <Footer />
    </>
  );
}
