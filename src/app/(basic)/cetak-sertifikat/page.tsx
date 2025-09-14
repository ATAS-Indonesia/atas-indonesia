import { ToastProvider } from "@/components/ui/toast";
import { LazyCetakSertifikat } from "@/features/cetak-sertifikat";
import { Suspense } from "react";

export default function CetakSertifikatPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastProvider>
        <LazyCetakSertifikat />
      </ToastProvider>
    </Suspense>
  );
}