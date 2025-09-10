"use client";

import { RegistrantTable } from "./components/registrant-table";

export const CekPendaftaran = () => {
  return (
    <div>
      <div className="max-w-2xl lg:mx-0">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Cek Pendaftaran ATAS Indonesia
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Cek progress pendaftaran calon anggota ATAS-mu disini
        </p>
      </div>
      <div className="mt-10 pt-10 border-t border-gray-200">
        <RegistrantTable />
      </div>
    </div>
  );
};
