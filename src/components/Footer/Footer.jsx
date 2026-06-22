import s from './footer.module.scss'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'

import logoFifa from '../../assets/WorldCupHeader/fifaWorldCupLogo.png'

export default function Footer() {
    return (
        <footer>
            <div className={s.letreirofifaworld}>
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={2}
                    spaceBetween={40}
                    loop={true}
                    freeMode={true}
                    speed={4500}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    className={s.carrousel}
                >
                    <SwiperSlide className={s.swiperLetreiro}>
                        <div className={s.content}>
                            <p>FIFA WORLD</p>
                            <img src={logoFifa} alt="" />
                            <p>CUP 2026</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={s.swiperLetreiro}>
                        <div className={s.content}>
                            <p>FIFA WORLD</p>
                            <img src={logoFifa} alt="" />
                            <p>CUP 2026</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={s.swiperLetreiro}>
                        <div className={s.content}>
                            <p>FIFA WORLD</p>
                            <img src={logoFifa} alt="" />
                            <p>CUP 2026</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={s.swiperLetreiro}>
                        <div className={s.content}>
                            <p>FIFA WORLD</p>
                            <img src={logoFifa} alt="" />
                            <p>CUP 2026</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </footer>
    )
}