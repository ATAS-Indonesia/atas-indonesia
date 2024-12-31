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
      <main className="min-h-[calc(100vh-225px)]">{children}</main>
      <SiteFooter />
    </>
  );
}
