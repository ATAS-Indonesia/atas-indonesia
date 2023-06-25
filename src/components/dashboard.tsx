import Image from "next/image";
import kakprasimg from "../assets/kakpras.png";
import kakariimg from "../assets/kakari.png";
import kakimg from "../assets/kak.png";
import kakrioimg from "../assets/kakrio.png";
import managementlogo from "../assets/management_atas.svg";
import java from "../assets/java.svg";
import sumatra from "../assets/sumatra.svg";
import kalimantan from "../assets/kalimantan.svg";
import sulawesi from "../assets/sulawesi.svg";

function Dashboard() {
  return (
    <>
      <div className="navbar">
        <div className="layout-title-navbar">
          <Image src={managementlogo} alt="management-logo" />
          <div className="title-nav">ATAS Indonesia</div>
        </div>
        <div className="item-nav">
          <div className="text-item-nav">Beranda</div>
          <div className="text-item-nav">Tentang</div>
          <div className="text-item-nav">Aktivitas</div>
          <div className="text-item-nav">FaQ</div>
        </div>
      </div>
      <div className="dashboard">
        <div className="layout-title">
          <div className="title-bold">Garuda, setia siap sedia</div>
          <div className="title-desc">
            <div className="text-desc">
              ATAS Indonesia adalah organisasi atau perkumpulan para pramuka
              yang telah mencapai tingkatan garuda.
            </div>
          </div>
          <div className="button-join">
            <div className="text-button">Gabung!</div>
          </div>
          <div className="text-quotes">
            “Karena pramuka tidak ada kata tamat.”
          </div>
        </div>
        <div className="layout-foto-gen">
          <div className="layout-foto">
            <div className="foto-oval">
              <Image src={kakprasimg} alt="kakprasimg" />
            </div>
            <div className="foto-corner">
              <Image src={kakariimg} alt="kakariimg" />
            </div>
          </div>
          <div className="layout-foto">
            <div className="foto-oval">
              <Image src={kakimg} alt="kakimg" />
            </div>
            <div className="foto-corner">
              <Image src={kakrioimg} alt="kkarioimg" />
            </div>
          </div>
        </div>
        {/* <div className="layout-footer">
          <div className="font-footer">
            Anggota ATAS Indonesia lebih dari 3,000+
          </div>

          <div className="line" />

          <div className="layout-island">
            <div className="java">
              <Image src={java} alt="java" />
            </div>
            <div className="sumatera">
              <Image src={sumatra} alt="sumatera" />
            </div>
            <div className="kalimantan">
              <Image src={kalimantan} alt="kalimantan" />
            </div>
            <div className="sulawesi">
              <Image src={sulawesi} alt="sulawesi" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Dashboard;
