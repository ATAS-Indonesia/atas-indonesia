import { Outfit } from "next/font/google";

export const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-outfit",
});
