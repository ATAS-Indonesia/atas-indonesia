import Image from 'next/image'
import logoAtasM from '../images/atas-management-logo.svg'
import logoFb from '../images/fb-logo.svg'
import logoYt from '../images/Yt-logo.svg'
import logoIg from '../images/Ig-logo.svg'
import logoTt from '../images/Tt-logo.svg'
import starStruck from '../images/star-struck-emoji.svg'

function SosmedIcon(props: any) {
    return (
        <>
            <a href={props.link} className='sosmed-icon'>
                <Image src={props.logo} alt={props.alt} />
            </a>
        </>
    )
}

function FooterLink(props: any) {
    return (
        <>
            <a href={props.link} className='footer-link'>
                {props.textLink}
            </a>
        </>
    )
}

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
                        <a href='#' className='regist-btn'>Daftar</a>
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
                            Jalan Sekian No. 80 Kec. Cibinong Kab. Bogor
                        </p>
                    </div>
                    <div className='footer-box centerBox'>
                        <div className='footer-box-item'>
                            <SosmedIcon link='' logo={logoFb} alt='logo-facebook' />
                            <SosmedIcon link='' logo={logoYt} alt='logo-youtube' />
                            <SosmedIcon link='' logo={logoIg} alt='logo-instagram' />
                            <SosmedIcon link='' logo={logoTt} alt='logo-tiktok' />
                        </div>
                    </div>
                    <div className='footer-box rightBox'>
                        <div className='footer-box-item'>
                            <FooterLink link='' textLink='Beranda' />
                            <FooterLink link='' textLink='Aktivitas' />
                            <FooterLink link='' textLink='Tentang' />
                            <FooterLink link='' textLink='FaQ' />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterSection