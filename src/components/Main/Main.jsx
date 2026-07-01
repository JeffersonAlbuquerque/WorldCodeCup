import { useState } from 'react';
import video from '../../assets/WorldCupHeader/Video/video5.mp4';
import s from './main.module.scss';

export default function Main() {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <section className={s.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={s.bgVideo}
        >
          <source src={video} type="video/mp4" />
        </video>

        <section className={s.texts}>
          <div className={s.containerPai}>
            <div className={s.cardAoVivo}>AO VIVO · COPA 2026
            </div>
            <h2 className={s.title}>UM ESTÁDIO
              DENTRO
              <span> DO BOTECO.</span></h2>
          </div>
          <div className={s.proximoJogo}>
            <div className={s.infoJogo}>
              <span className={s.proxima}>PRÓXIMA PARTIDA</span>

              <span className={s.data}>
                05.JUL • 17:00
              </span>
            </div>

            <div className={s.containerTimes}>
              <div className={s.time}>
                <h2>BRA</h2>
                <span>BRASIL</span>
              </div>

              <span className={s.vs}>VS</span>

              <div className={s.time}>
                <h2>NOR</h2>
                <span>NORUEGA</span>
              </div>
            </div>

            <div className={s.estatisticas}>
              <div>
                <h3>4</h3>
                <span>TELÃO</span>
              </div>

              <div>
                <h3>38</h3>
                <span>CHOPPS</span>
              </div>

              <div>
                <h3>200</h3>
                <span>LUGARES</span>
              </div>
            </div>

            <button className={s.btnReservar}>
              GARANTIR LUGAR →
            </button>
          </div>
        </section>
      </section>
    </>

  );
}