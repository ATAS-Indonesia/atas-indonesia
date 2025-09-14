import { Suspense } from "react";
import { ToastProvider } from "@/components/ui/toast";
import { LazyCetakSertifikat } from "@/features/cetak-sertifikat";

export default function CetakSertifikatPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastProvider>
        <LazyCetakSertifikat />
      </ToastProvider>
    </Suspense>
  );
}
