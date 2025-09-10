import dynamic from "next/dynamic";

export const LazyCekPendaftaran = dynamic(() =>
  import("./cek-pendaftaran").then(mod => mod.CekPendaftaran)
);