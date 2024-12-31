import "@/styles/globals.css";
import { Viewport } from "next";
import { outfit } from "@/styles/fonts";
import { AppProvider } from "@/lib/providers/app-provider";

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
    images: "/images/atas-indo.avif",
    url: "https://atas.or.id",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@atasindonesia",
    title: "ATAS Indonesia",
    description:
      "Laman Resmi ATAS Chapter Indonesia. Persaudaraan Pramuka Garuda Tingkat Dunia cabang Indonesia",
    images: "/images/atas-indo.avif",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={outfit.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
