export function TotalMember() {
  return (
    <div className="hidden bg-atas-primary items-center justify-center gap-10 py-14 sm:flex sm:flex-col lg:flex-row">
      <div className="font-footer">
        Anggota ATAS Indonesia lebih dari 3,000+
      </div>

      <div className="grid grid-cols-4 gap-5 items-center">
        <img src="/images/java.svg" alt="java" className="mx-auto" />
        <img src="/images/sumatra.svg" alt="sumatera" className="mx-auto" />
        <img
          src="/images/kalimantan.svg"
          alt="kalimantan"
          className="mx-auto"
        />
        <img src="/images/sulawesi.svg" alt="sulawesi" className="mx-auto" />
      </div>
    </div>
  );
}
