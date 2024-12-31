import { SiteFooter } from "@/components/widgets/footer/site-footer";
import { Navigation } from "@/components/widgets/header/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <main className="min-h-[calc(100vh-225px)] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
