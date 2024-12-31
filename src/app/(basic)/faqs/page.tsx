import { Metadata } from "next";
import { LazyFaq } from "@/features/faq";

export const metadata: Metadata = {
  title: "FAQs - ATAS Indonesia",
  description: "Pertanyaan yang sering ditanyakan ke mimin ATAS Indonesia",
};

export default function FaqsPage() {
  return <LazyFaq />;
}
