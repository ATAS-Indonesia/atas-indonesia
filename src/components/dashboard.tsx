import Image from "next/image";
import kakprasimg from "../assets/kakpras.png";
import kakariimg from "../assets/kakari.png";
import kakimg from "../assets/kak.png";
import kakrioimg from "../assets/kakrio.png";
// import java from "../assets/java.svg";
// import sumatra from "../assets/sumatra.svg";
// import kalimantan from "../assets/kalimantan.svg";
// import sulawesi from "../assets/sulawesi.svg";

function Dashboard() {
  return (
    <>
      <header className="navbar">
        <div className="layout-title-navbar">
          {/* <img src="/images/management_atas.svg" alt="management-logo" /> */}
          <div className="title-nav">ATAS Indonesia</div>
        </div>
        <div className="item-nav">
          <div className="text-item-nav">Beranda</div>
          <div className="text-item-nav">Tentang</div>
          <div className="text-item-nav">Aktivitas</div>
          <div className="text-item-nav">FaQ</div>
        </div>
      </header>
      <div className="dashboard">
        <div className="layout-title">
          <div className="title-bold">Garuda, setia siap sedia</div>
          <div className="title-desc">
            <div className="text-desc">
              ATAS Indonesia adalah persaudaraan atau perkumpulan para pramuka
              yang telah mencapai tingkatan Garuda.
            </div>
          </div>
          <div className="button-join">
            <button className="text-button">Gabung!</button>
          </div>
          <div className="text-quotes">
            “Karena pramuka tidak ada kata tamat.”
          </div>
        </div>
        <div className="layout-foto-gen">
          <div className="layout-foto">
            <div className="foto-oval">
              <img src="/images/kakpras.png" alt="kakprasimg" />
            </div>
            <div className="foto-corner">
              <img src="/images/kakari.png" alt="kakariimg" />
            </div>
          </div>
          <div className="layout-foto">
            <div className="foto-oval">
              <img src="/images/kak.png" alt="kakimg" />
            </div>
            <div className="foto-corner">
              <img src="/images/kakrio.png" alt="kkarioimg" />
            </div>
          </div>
        </div>
      </div>
      <div className="layout-footer">
        <div className="font-footer">
          Anggota ATAS Indonesia lebih dari 3,000+
        </div>

        <div className="line" />

        <div className="layout-island">
          <div className="java">
            <img src="/images/java.svg" alt="java" />
          </div>
          <div className="sumatera">
            <img src="/images/sumatra.svg" alt="sumatera" />
          </div>
          <div className="kalimantan">
            <img src="/images/kalimantan.svg" alt="kalimantan" />
          </div>
          <div className="sulawesi">
            <img src="/images/sulawesi.svg" alt="sulawesi" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
