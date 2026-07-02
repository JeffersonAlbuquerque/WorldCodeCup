import { Beer, Trophy, Music2 } from "lucide-react";
import s from "./Eventos.module.scss";

const eventos = {
    terca: [
        {
            hora: "15:00",
            titulo: "Abertura da casa + happy hour",
            tipo: "PROMO",
            icone: <Beer size={26} />,
            destaque: false,
        },
        {
            hora: "16:00",
            titulo: "Transmissão: Brasil x Sérvia",
            tipo: "JOGO",
            icone: <Trophy size={26} />,
            destaque: true,
        },
        {
            hora: "16:00",
            titulo: "Chopp em dobro durante os 90 minutos",
            tipo: "PROMO",
            icone: <Beer size={26} />,
            destaque: false,
        },
        {
            hora: "19:00",
            titulo: "DJ residente — set pós-jogo",
            tipo: "SHOW",
            icone: <Music2 size={26} />,
            destaque: false,
        },
    ],
};

export default function Programacao() {
    return (
        <section className={s.programacao}>
            <div className={s.container}>
                <span className={s.subtitulo}>PROGRAMAÇÃO & EVENTOS</span>

                <h2>
                    CADA DIA UMA <span>FESTA DIFERENTE</span>
                </h2>

                <p>
                    Jogos, shows e promoções imperdíveis — toda semana no BOTECO DO HEX.
                </p>

                <div className={s.tabs}>
                    <button className={s.active}>TERÇA</button>
                    <button>QUINTA</button>
                    <button>SEXTA</button>
                    <button>SÁBADO</button>
                </div>

                <div className={s.lista}>
                    {eventos.terca.map((evento, index) => (
                        <div
                            key={index}
                            className={`${s.card} ${evento.destaque ? s.destaque : ""
                                }`}
                        >
                            <div className={s.esquerda}>
                                <div className={s.icone}>{evento.icone}</div>

                                <span className={s.hora}>{evento.hora}</span>

                                <h3>{evento.titulo}</h3>
                            </div>

                            <span className={s.tag}>{evento.tipo}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}