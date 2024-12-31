"use client";

import { MemberTable } from "./components/member-table";

export const CekNomor = () => {
  return (
    <div>
      <div className="max-w-2xl lg:mx-0">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Cek Nomor ATAS
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Cek nomor anggota ATAS-mu disini untuk memastikan keanggotaanmu sudah
          terdaftar secara resmi.
        </p>
      </div>
      <div className="mt-10 pt-10 border-t border-gray-200">
        <MemberTable />
      </div>
    </div>
  );
};
