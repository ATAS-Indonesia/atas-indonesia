import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import raisingHand from '../images/man-raising-hand.svg'

function openFaq(e: any) {
    const btn = document.getElementById('btn-' + e)
    const faq = document.getElementById('faq-' + e)

    btn?.classList.toggle('is-minus')
    faq?.classList.toggle('is-display')
    faq?.classList.toggle('is-hidden')
}

function FaqItem(props: any) {
    return (
        <>
            <li className='faq-item'>
                <h3>{props.question} <span id={'btn-' + props.id} className={'faqBtn-item is-' + props.btnDisplay} onClick={() => openFaq(props.id)}></span></h3>
                <div id={'faq-' + props.id} className={'faq is-' + props.faqDisplay}>
                    <p>{props.answer}</p>
                </div>
            </li>
            <hr />
        </>
    )
}

function FaqSection() {
    return (
        <>
            <div className='topside-faq'>
                <h2>Frequently asked questions...</h2>
                <p>Kumpulan daftar pertanyaan beserta jawaban
                    yang sering dipertanyakan tentang ATAS Indonesia.</p>
            </div>
            <div className='bottomside-faq'>
                <div className='faq-box'>
                    <h2>Kamu bertanya, ATAS menjawab! <Image src={raisingHand} alt='emoji' className='faq-emoji' /></h2>
                    <ul className='faq-item-box'>
                        <FaqItem id='1' btnDisplay='minus' faqDisplay='display' question='Pertanyaan 1?' answer='Ini adalah jawaban untuk pertanyaan nomor 1' />
                        <FaqItem id='2' btnDisplay='plus' faqDisplay='hidden' question='Pertanyaan 2?' answer='Ini adalah jawaban untuk pertanyaan nomor 2' />
                        <FaqItem id='3' btnDisplay='plus' faqDisplay='hidden' question='Pertanyaan 3?' answer='Ini adalah jawaban untuk pertanyaan nomor 3' />
                    </ul>
                </div>
            </div >
        </>
    )
}

export default FaqSection