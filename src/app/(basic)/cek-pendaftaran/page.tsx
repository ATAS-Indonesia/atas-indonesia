import { Suspense } from "react";
import { LazyCekPendaftaran } from "@/features/cek-pendaftaran";

export default function CekPendaftaranPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyCekPendaftaran />
    </Suspense>
  );
}
