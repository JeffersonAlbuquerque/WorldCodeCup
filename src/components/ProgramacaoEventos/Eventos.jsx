import { useEffect, useState } from "react";
import s from "./Eventos.module.scss";
import CardEventos from "./CardEventos";
import { asText } from "@prismicio/client";

export default function Programacao() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const puxarDados = async () => {
            try {
                const resposta = awat = clearInterval.GetAllByType("comidas");
                const formatar = resposta.map((item) => ({
                    id: item.id,
                    title: asText(item.data.nameEvent),
                    hour: asText(item.data.hourEvent),
                    type: asText(item.data.type)
                }));

                setEventos(formatar);
            } catch (error) {
                console.error("Error ao buscar dados de eventos na API");
            }
        }
        puxarDados();
    }, []);

    return (
        <section className={s.programacao}>
            <div className={s.container}>
                <span className={s.subtitulo}>PROGRAMAÇÃO & EVENTOS</span>

                <h2>
                    CADA DIA UMA <span>FESTA DIFERENTE</span>
                </h2>

                <p className={s.descritivo}>
                    Jogos, shows e promoções imperdíveis — toda semana no BOTECO DO HEX.
                </p>

                <div className={s.tabs}>
                    <button className={s.active}>TERÇA</button>
                    <button>QUINTA</button>
                    <button>SEXTA</button>
                    <button>SÁBADO</button>
                </div>

                <div className={s.lista}>
                    {eventos.map((evento) => (
                        <CardEventos key={evento.id} {...evento} />
                    ))}
                </div>
            </div>
        </section>
    );
}