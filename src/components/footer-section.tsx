import Image from 'next/image'
import logoAtasM from '../images/atas-management-logo.svg'
import logoFb from '../images/fb-logo.svg'
import logoYt from '../images/Yt-logo.svg'
import logoIg from '../images/Ig-logo.svg'
import logoTt from '../images/Tt-logo.svg'
import starStruck from '../images/star-struck-emoji.svg'

function FooterSection() {
    return (
        <>
            <div className='topside-footer'>
                <div className='footerBox top'>
                    <div className='footer-box top leftBox'>
                        <h3>Daftar Sekarang <Image src={starStruck} alt='emoji' className='footer-emoji' /></h3>
                        <p>Masukan email anda untuk kami kirimkan formulir</p>
                    </div>
                    <div className='footer-box top rightBox'>
                        <a href='' className='regist-btn'>Daftar</a>
                    </div>
                </div>
            </div>
            <footer className='footerWrapper'>
                <div className='footerBox'>
                    <div className='footer-box leftBox'>
                        <div className='footer-box-logo'>
                            <Image src={logoAtasM} alt='logo-management-atas' priority={false} /> <h2>ATAS Indonesia</h2>
                        </div>

                        <span>Kantor Sekretariat :</span>
                        <p>
                            Jalan Sekian No.80 Kec. Cibinong Kab. Bogor
                        </p>
                    </div>
                    <div className='footer-box centerBox'>
                        <div className='footer-box-item'>
                            <a href='' className='sosmed-icon'>
                                <Image src={logoFb} alt='logo-facebook' />
                            </a>
                            <a href='' className='sosmed-icon'>
                                <Image src={logoYt} alt='logo-youtube' />
                            </a>
                            <a href='' className='sosmed-icon'>
                                <Image src={logoIg} alt='logo-instagram' />
                            </a>
                            <a href='' className='sosmed-icon'>
                                <Image src={logoTt} alt='logo-tiktok' />
                            </a>
                        </div>
                    </div>
                    <div className='footer-box rightBox'>
                        <div className='footer-box-item'>
                            <a href='' className='footer-link'>
                                Beranda
                            </a>
                            <a href='' className='footer-link'>
                                Aktivitas
                            </a>
                            <a href='' className='footer-link'>
                                Tentang
                            </a>
                            <a href='' className='footer-link'>
                                FaQ
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterSection