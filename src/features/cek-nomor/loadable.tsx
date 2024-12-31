import dynamic from "next/dynamic";

export const LazyCekNomor = dynamic(() =>
  import("./cek-nomor").then(mod => mod.CekNomor)
);
