import s from './sedejogos.module.scss'

//logos
import CardSede from './CardSede'

//images import
import city1 from '../../assets/SedeJogos/1.png'
import city2 from '../../assets/SedeJogos/2.png'
import city3 from '../../assets/SedeJogos/3.png'
import city4 from '../../assets/SedeJogos/4.png'
import city5 from '../../assets/SedeJogos/5.png'
import city6 from '../../assets/SedeJogos/6.png'
import city7 from '../../assets/SedeJogos/7.png'
import city8 from '../../assets/SedeJogos/8.png'
import city9 from '../../assets/SedeJogos/9.png'
import city10 from '../../assets/SedeJogos/10.png'
import city11 from '../../assets/SedeJogos/11.png'
import city12 from '../../assets/SedeJogos/12.png'
import city13 from '../../assets/SedeJogos/13.png'
import city14 from '../../assets/SedeJogos/14.png'
import city15 from '../../assets/SedeJogos/15.png'
import city16 from '../../assets/SedeJogos/16.png'


// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

import 'swiper/css'

export default function SedeJogos() {

    const sedes = [
        { id: 1, image: city1 },
        { id: 2, image: city2 },
        { id: 3, image: city3 },
        { id: 4, image: city4 },
        { id: 5, image: city5 },
        { id: 6, image: city6 },
        { id: 7, image: city7 },
        { id: 8, image: city8 },
        { id: 9, image: city9 },
        { id: 10, image: city10 },
        { id: 11, image: city11 },
        { id: 12, image: city12 },
        { id: 13, image: city13 },
        { id: 14, image: city14 },
        { id: 15, image: city15 },
        { id: 16, image: city16 },
    ]
    return (
        <>
            <h1>SEDES</h1>
            <section className={s.containerGeral}>

                <section className={s.cards}>
                    <Swiper
                        className={s.carrousel}
                        modules={[Autoplay, FreeMode]}
                        slidesPerView={3}
                        spaceBetween={40}
                        loop={true}
                        freeMode={true}
                        speed={2500}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: true,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },         // Dispositivos muito pequenos (até ~320px)
                            360: { slidesPerView: 1.5 },       // Celulares pequenos (Galaxy S8, etc.)
                            480: { slidesPerView: 1.5 },     // Celulares médios
                            640: { slidesPerView: 1.5 },     // Celulares maiores
                            768: { slidesPerView: 2 },       // Tablets em retrato
                            900: { slidesPerView: 3 },       // Tablets em paisagem
                            1024: { slidesPerView: 4 },      // Laptops pequenos
                            1280: { slidesPerView: 4 },      // Laptops médios
                            1536: { slidesPerView: 4 },      // Telas grandes
                        }}
                    >
                        {sedes.map((sede) => (
                            <SwiperSlide className={s.swiper} key={sede.id}>
                                <CardSede imageUrl={sede.image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </section>


        </>

    )
}