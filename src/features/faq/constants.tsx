import Link from "next/link";
import { ReactNode } from "react";

export const FAQ_DATA: { question: string; answer: ReactNode }[] = [
  {
    question: "Apa itu ATAS?",
    answer:
      "ATAS merupakan persaudaraan Pramuka Garuda sedunia di bawah naungan WOSM",
  },
  {
    question: "Apa saja syarat untuk bergabung menjadi anggota ATAS?",
    answer:
      "Syarat menjadi anggota ATAS adalah pernah mencapai tingkatan Pramuka Garuda di golongan apapun dan berusia minimal 15 tahun saat mengajukan keanggotaan",
  },
  {
    question: "Bagaimana cara daftar ATAS?",
    answer:
      "Caranya cukup mengisi formulir pendaftaran dengan melampirkan tautan profil Scout SDGs yang telah memiliki service hour untuk anggota muda; dan melampirkan sertifikat Safe from Harm untuk anggota dewasa",
  },
  {
    question: "Dimana saya bisa cek nomor ATAS saya?",
    answer: (
      <span>
        Kamu bisa cek nomor ATAS anda di halaman{" "}
        <Link href="/cek-nomor" className="text-atas-primary">
          Cek Nomor ATAS
        </Link>
      </span>
    ),
  },
  {
    question: "Saya sudah daftar, tapi tidak segera mendapatkan nomor ATAS?",
    answer:
      "Nomor ATAS akan diberikan setelah Garuda telah lolos verifikasi di Scout SDGs, masa verifikasi kurang lebih memakan waktu 1 bulan",
  },
  {
    question:
      "Saya sudah menunggu selama 1 bulan tapi tetap tidak mendapatkan nomor ATAS?",
    answer:
      "Hal tersebut bisa jadi karena Garuda tidak lolos verifikasi di project bakti Scout SDGs, pastikan laporan project bakti memuat deskripsi yang jelas dilengkapi dengan minimal 5 buah dokumentasi (foto/video)",
  },
  {
    question: "Kapan inagurasi terdekat? Bikin inagurasi di Kwarcab X dong.",
    answer:
      "Inagurasi merupakan kegiatan yang bersifat usulan dari Kwartir, sehingga jadwal dan lokasi inagurasi sangat bergantung pada surat yang masuk dari Kwartir ke Pengurus Nasional ATAS Indonesia",
  },
  {
    question: "Bagaimana cara mengajukan inagurasi?",
    answer: (
      <span>
        Kwartir dapat bersurat ke Kwartir Nasional Gerakan Pramuka q.c. Pengurus
        Nasional ATAS Indonesia dan mengumpulkan setidaknya{" "}
        <span className="font-bold">50 calon anggota ATAS</span> yang sudah
        memiliki nomor ATAS
      </span>
    ),
  },
  {
    question: "Apa saja tanda pengenal ATAS?",
    answer:
      "ATAS memiliki tanda pengenal berupa badge ATAS yang dikenakan di lengan kiri seragam pramuka, tidak ada lagi tanda pengenal lainnya kecuali kacu/scarf ATAS",
  },
  {
    question: "Apakah saya boleh membuat ID Card ATAS atau atribut lainnya?",
    answer:
      "Tidak diperbolehkan membuat ID Card ATAS atau atribut lainnya, karena hal tersebut dapat membuat kebingungan dan kekeliruan di lingkungan Pramuka",
  },
];
