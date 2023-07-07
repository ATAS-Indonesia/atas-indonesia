import Image from "next/image";
import logoAtasManag from "../assets/management_atas.svg";
import logoFacebook from "../assets/facebook.svg";
import logoYoutube from "../assets/youtube.svg";
import logoInsta from "../assets/instagram.svg";
import LogoTiktok from "../assets/tiktok.svg";
import emoji from "../assets/star_emoji.svg";

function Footer() {
  return (
    <>
      <div className="topside-footer">
        <div className="footerBox top">
          <div className="footer-box top leftBox">
            <h3>
              Daftar Sekarang{" "}
              <Image src={emoji} alt="emoji" className="footer-emoji" />
            </h3>
            <p>Masukan email anda untuk kami kirimkan formulir</p>
          </div>
          <div className="footer-box top rightBox">
            <a href="" className="regist-btn">
              Daftar
            </a>
          </div>
        </div>
      </div>
      <footer className="footerWrapper">
        <div className="footerBox">
          <div className="footer-box leftBox">
            <div className="footer-box-logo">
              <Image
                src={logoAtasManag}
                alt="logo-management-atas"
                priority={false}
              />{" "}
              <h2>ATAS Indonesia</h2>
            </div>

            <span>Kantor Sekretariat :</span>
            <p>Jalan Sekian No.80 Kec. Cibinong Kab. Bogor</p>
          </div>
          <div className="footer-box centerBox">
            <div className="footer-box-item">
              <a href="" className="sosmed-icon">
                <Image src={logoFacebook} alt="logo-facebook" />
              </a>
              <a href="" className="sosmed-icon">
                <Image src={logoYoutube} alt="logo-youtube" />
              </a>
              <a href="" className="sosmed-icon">
                <Image src={logoInsta} alt="logo-instagram" />
              </a>
              <a href="" className="sosmed-icon">
                <Image src={LogoTiktok} alt="logo-tiktok" />
              </a>
            </div>
          </div>
          <div className="footer-box rightBox">
            <div className="footer-box-item">
              <a href="" className="footer-link">
                Beranda
              </a>
              <a href="" className="footer-link">
                Aktivitas
              </a>
              <a href="" className="footer-link">
                Tentang
              </a>
              <a href="" className="footer-link">
                FaQ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
