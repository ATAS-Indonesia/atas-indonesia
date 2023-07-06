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

function ItemCarousel(props: any) {
    return (
        <>
            <div className='item-carousel'>
                <div className='testimonyText'>
                    <p>{props.textTestimony}</p>
                </div>
                <div className='testimonyUser'>
                    <div className='testimonyUser-img'>
                        <Image src={props.imgUser} alt={props.imgAlt} />
                    </div>
                    <div className='testimonyUser-name'>
                        <h3>{props.name}</h3>
                        <span>{props.desc}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

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
                    <ItemCarousel
                        textTestimony='“ Wah, pokoknya kalian para garuda wajib banget gabung ATAS. Aku ikut seminar luar negeri tahun 2022 karena dapat informasi dari temen-temen ATAS. ”'
                        imgUser={imgUser1}
                        imgAlt='user1'
                        name='Chandra Dwi Cahya'
                        desc='Pramuka Garuda Jawa Tengah'
                    />
                    <ItemCarousel
                        textTestimony='“ Percaya gak sih, aku lolos masuk IPB karena dibantu dengan ATAS. Penasaran kan kalian? Cepet-cepet gabung deh!. ”'
                        imgUser={imgUser2}
                        imgAlt='user2'
                        name='Kartika Cinta'
                        desc='Pramuka Garuda Jawa Barat'
                    />
                    <ItemCarousel
                        textTestimony='“ Saya gak nyangka banget dapat undangan untuk jadi pembicara di SMP saya dulu hanya karena saya adalah anggota ATAS. ”'
                        imgUser={imgUser3}
                        imgAlt='user3'
                        name='Bli Made'
                        desc='Pramuka Garuda Bali'
                    />

                    {/* borderline */}

                    <ItemCarousel
                        textTestimony='“ Wah, pokoknya kalian para garuda wajib banget gabung ATAS. Aku ikut seminar luar negeri tahun 2022 karena dapat informasi dari temen-temen ATAS. ”'
                        imgUser={imgUser1}
                        imgAlt='user1'
                        name='Chandra Dwi Cahya'
                        desc='Pramuka Garuda Jawa Tengah'
                    />
                    <ItemCarousel
                        textTestimony='“ Percaya gak sih, aku lolos masuk IPB karena dibantu dengan ATAS. Penasaran kan kalian? Cepet-cepet gabung deh!. ”'
                        imgUser={imgUser2}
                        imgAlt='user2'
                        name='Kartika Cinta'
                        desc='Pramuka Garuda Jawa Barat'
                    />
                    <ItemCarousel
                        textTestimony='“ Saya gak nyangka banget dapat undangan untuk jadi pembicara di SMP saya dulu hanya karena saya adalah anggota ATAS. ”'
                        imgUser={imgUser3}
                        imgAlt='user3'
                        name='Bli Made'
                        desc='Pramuka Garuda Bali'
                    />
                </OwlCarousel>

            </div>
        </>
    )
}

export default TestimonySection