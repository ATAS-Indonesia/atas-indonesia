import {
  FACEBOOK_LINK,
  FORM_LINK,
  INSTAGRAM_LINK,
  QNA_LINK,
  TIKTOK_LINK,
  YOUTUBE_LINK,
} from "@/constants/links";

function Footer() {
  return (
    <>
      <div className="topside-footer">
        <div className="footerBox top">
          <div className="footer-box top leftBox text-white">
            <h3>
              Daftar Sekarang{" "}
              <img
                src="/images/star_emoji.svg"
                alt="emoji"
                className="footer-emoji"
              />
            </h3>
            <p>Masukan email anda untuk kami kirimkan formulir</p>
          </div>
          <div className="footer-box top rightBox text-white">
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="regist-btn"
            >
              Daftar
            </a>
          </div>
        </div>
      </div>
      <footer className="footerWrapper text-white">
        <div className="footerBox">
          <div className="footer-box leftBox">
            <div className="footer-box-logo">
              <h2>ATAS Indonesia</h2>
            </div>

            <span>Kantor Sekretariat :</span>
            <p>Jalan Sekian No.80 Kec. Cibinong Kab. Bogor</p>
          </div>
          <div className="footer-box centerBox">
            <div className="footer-box-item">
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="sosmed-icon"
              >
                <img src="/images/facebook.svg" alt="logo-facebook" />
              </a>
              <a
                href={YOUTUBE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="sosmed-icon"
              >
                <img src="/images/youtube.svg" alt="logo-youtube" />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="sosmed-icon"
              >
                <img src="/images/instagram.svg" alt="logo-instagram" />
              </a>
              <a
                href={TIKTOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="sosmed-icon"
              >
                <img src="/images/tiktok.svg" alt="logo-tiktok" />
              </a>
            </div>
          </div>
          <div className="footer-box rightBox">
            <div className="footer-box-item">
              <a href="/" className="footer-link">
                Beranda
              </a>
              <a href="/" className="footer-link">
                Aktivitas
              </a>
              <a href="/" className="footer-link">
                Tentang
              </a>
              <a
                href={QNA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
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
