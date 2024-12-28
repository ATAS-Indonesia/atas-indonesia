import { Footer } from "@/components/widgets/footer";
import { Header } from "@/components/widgets/header";
import "@/styles/globals.css";
import { outfit } from "@/styles/fonts";

export const metadata = {
  title: "ATAS Indonesia",
  description:
    "Laman Resmi ATAS Chapter Indonesia. Persaudaraan Pramuka Garuda Tingkat Dunia cabang Indonesia",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ATAS Indonesia",
    description:
      "Laman Resmi ATAS Chapter Indonesia. Persaudaraan Pramuka Garuda Tingkat Dunia cabang Indonesia",
    images: ["/images/management_atas.svg"],
    url: "https://atasindonesia.org",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@atasindonesia",
    title: "ATAS Indonesia",
    description:
      "Laman Resmi ATAS Chapter Indonesia. Persaudaraan Pramuka Garuda Tingkat Dunia cabang Indonesia",
    images: ["/images/management_atas.svg"],
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
