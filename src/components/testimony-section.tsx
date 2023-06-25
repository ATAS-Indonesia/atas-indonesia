import Image from 'next/image'
import petik from '../images/Petik.svg'
import imgUser1 from '../images/user1.svg'
import imgUser2 from '../images/user2.svg'
import imgUser3 from '../images/user3.svg'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import dynamic from 'next/dynamic'

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

function TestimonySection() {
    return (
        <>
            <div className='testimonyWrapper'>
                <div className='testimonyBox'>
                    <Image src={petik} alt='petik' />
                    <h2>Apa kata mereka?</h2>
                    <p>Ini yang mereka katakan setelah bergabung dengan ATAS Indonesia</p>
                </div>

                <OwlCarousel className='owl-theme' loop margin={10} nav>
                    <div className='item-carousel'>
                        <div className='testimonyText'>
                            <p>“ Wah, pokoknya kalian para garuda wajib banget
                                gabung ATAS. Aku ikut seminar luar negeri tahun 2022
                                karena dapat informasi dari temen-temen ATAS. ”</p>
                        </div>
                        <div className='testimonyUser'>
                            <div className='testimonyUser-img'>
                                <Image src={imgUser1} alt='user1' />
                            </div>
                            <div className='testimonyUser-name'>
                                <h3>Chandra Dwi Cahya</h3>
                                <span>Pramuka Garuda Jawa Tengah</span>
                            </div>
                        </div>
                    </div>
                    <div className='item-carousel middle'>
                        <div className='testimonyText'>
                            <p>“ Percaya gak sih, aku lolos masuk IPB karena
                                dibantu dengan ATAS. Penasaran kan kalian?
                                Cepet-cepet gabung deh!. ”</p>
                        </div>
                        <div className='testimonyUser'>
                            <div className='testimonyUser-img'>
                                <Image src={imgUser2} alt='user2' />
                            </div>
                            <div className='testimonyUser-name'>
                                <h3>Kartika Cinta</h3>
                                <span>Pramuka Garuda Jawa Barat</span>
                            </div>
                        </div>
                    </div>
                    <div className='item-carousel'>
                        <div className='testimonyText'>
                            <p>“ Saya gak nyangka banget dapat undangan
                                untuk jadi pembicara di SMP saya dulu hanya
                                karena saya adalah anggota ATAS. ”</p>
                        </div>
                        <div className='testimonyUser'>
                            <div className='testimonyUser-img'>
                                <Image src={imgUser3} alt='user3' />
                            </div>
                            <div className='testimonyUser-name'>
                                <h3>Bli Made</h3>
                                <span>Pramuka Garuda Bali</span>
                            </div>
                        </div>
                    </div>

                    {/* borderline */}

                    <div className='item-carousel'>
                        <div className='testimonyText'>
                            <p>“ Percaya gak sih, aku lolos masuk IPB karena
                                dibantu dengan ATAS. Penasaran kan kalian?
                                Cepet-cepet gabung deh!. ”</p>
                        </div>
                        <div className='testimonyUser'>
                            <div className='testimonyUser-img'>
                                <Image src={imgUser2} alt='user2' />
                            </div>
                            <div className='testimonyUser-name'>
                                <h3>Kartika Cinta</h3>
                                <span>Pramuka Garuda Jawa Barat</span>
                            </div>
                        </div>
                    </div>
                    <div className='item-carousel middle'>
                        <div className='testimonyText'>
                            <p>“ Saya gak nyangka banget dapat undangan
                                untuk jadi pembicara di SMP saya dulu hanya
                                karena saya adalah anggota ATAS. ”</p>
                        </div>
                        <div className='testimonyUser'>
                            <div className='testimonyUser-img'>
                                <Image src={imgUser3} alt='user3' />
                            </div>
                            <div className='testimonyUser-name'>
                                <h3>Bli Made</h3>
                                <span>Pramuka Garuda Bali</span>
                            </div>
                        </div>
                    </div>
                    <div className='item-carousel'>
                        <div className='testimonyText'>
                            <p>“ Wah, pokoknya kalian para garuda wajib banget
                                gabung ATAS. Aku ikut seminar luar negeri tahun 2022
                                karena dapat informasi dari temen-temen ATAS. ”</p>
                        </div>
                        <div className='testimonyUser'>
                            <div className='testimonyUser-img'>
                                <Image src={imgUser1} alt='user1' />
                            </div>
                            <div className='testimonyUser-name'>
                                <h3>Chandra Dwi Cahya</h3>
                                <span>Pramuka Garuda Jawa Tengah</span>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>

            </div>
        </>
    )
}

export default TestimonySection