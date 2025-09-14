import dynamic from "next/dynamic";

export const LazyCetakSertifikat = dynamic(() =>
  import("./cetak-sertifikat").then(mod => mod.CetakSertifikat)
);
