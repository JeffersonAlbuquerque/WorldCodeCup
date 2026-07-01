// Swiper
import s from './CarrousselAtracoes.module.scss'

import CardsCarroussel from './CardsCarroussel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

import 'swiper/css'

//images
import img1 from '../../assets/ImagensAtracoes/img1.png'
import img2 from '../../assets/ImagensAtracoes/img2.png'
import img3 from '../../assets/ImagensAtracoes/img3.png'
import img4 from '../../assets/ImagensAtracoes/img4.png'

export default function CarrousselAtracoes() {
    const atracoes = [
        {id: 1, image: img1},
        {id: 2, image: img2},
        {id: 3, image: img3},
        {id: 4, image: img4}
    ]
    return (
        <>
            <h1>Promoções</h1>
            <section className={s.containerGeral}>

                <section className={s.cards}>
                    <Swiper
                        className={s.carrousel}
                        modules={[Autoplay, FreeMode]}
                        slidesPerView={3}
                        spaceBetween={40}
                        loop={true}
                        freeMode={true}
                        speed={4500}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: true,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 2 },         // Dispositivos muito pequenos (até ~320px)
                            360: { slidesPerView: 2},       // Celulares pequenos (Galaxy S8, etc.)
                            480: { slidesPerView: 2 },     // Celulares médios
                            640: { slidesPerView: 2 },     // Celulares maiores
                            768: { slidesPerView: 2 },       // Tablets em retrato
                            900: { slidesPerView: 2 },       // Tablets em paisagem
                            1024: { slidesPerView: 2 },      // Laptops pequenos
                            1280: { slidesPerView: 2 },      // Laptops médios
                            1536: { slidesPerView: 2 },      // Telas grandes
                        }}
                    >
                        {atracoes.map((sede) => (
                            <SwiperSlide className={s.swiper} key={sede.id}>
                                <CardsCarroussel imageUrl={sede.image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </section>


        </>

    )
}