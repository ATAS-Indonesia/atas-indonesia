"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useFetchMember } from "../cek-nomor/hooks/useFetchMember";
import { Member } from "../cek-nomor/hooks/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toast } from "@/components/ui/toast";

export const CetakSertifikat = () => {
  const [nomorAnggota, setNomorAnggota] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");

  const { data: memberList = [] } = useFetchMember();

  const handleCetakSertifikat = () => {
    if (nomorAnggota === "" || namaLengkap === "") {
      toast.error("Terjadi kesalahan!", {
        description: "Nomor anggota dan nama lengkap harus diisi",
        position: "top-right",
      });
      return;
    }

    const member = memberList.find(
      (member: Member) =>
        member["Nomor ATAS"] === nomorAnggota &&
        member["Nama Lengkap"].toLowerCase() === namaLengkap.toLowerCase()
    );

    if (!member) {
      toast.error("Terjadi kesalahan!", {
        description: "Nomor anggota tidak ditemukan",
        position: "top-right",
      });
      return;
    }

    toast.success("Sertifikat berhasil dicetak", {});
    // TODO: Create a function to generate a pdf of the certificate
    // TODO: Create a function to download the pdf
  };

  return (
    <>
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Cetak Sertifikat ATAS Indonesia
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Cetak sertifikat digital keanggotaan ATAS-mu disini
        </p>
      </div>
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Cetak Sertifikat</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="nomor-anggota">Nomor Anggota</Label>
            <Input
              type="text"
              placeholder="Masukkan nomor anggota, mis. 282"
              id="nomor-anggota"
              value={nomorAnggota}
              onChange={e => setNomorAnggota(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="nama">Nama Lengkap</Label>
            <Input
              type="text"
              placeholder="Masukkan nama lengkap"
              id="nama"
              value={namaLengkap}
              onChange={e => setNamaLengkap(e.target.value)}
            />
          </div>
          <Button onClick={handleCetakSertifikat}>Cetak Sertifikat</Button>
        </CardContent>
      </Card>
    </>
  );
};
