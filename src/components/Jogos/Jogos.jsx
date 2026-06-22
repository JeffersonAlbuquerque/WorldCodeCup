import axios from 'axios';
import { useState, useEffect } from 'react';
import s from './jogos.module.scss'

//images

import vinijr from '../../assets/Jogos/vinijr.png'
import ney from '../../assets/Jogos/neymar.png'

export default function Jogos() {
    const [jogosCopa, setJogosCopa] = useState([]);

    const puxarJogos = async () => {
        try {
            const response = await axios.get(
                'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4429&s=2026'
            );

            console.log(response.data);

            setJogosCopa(response.data.events || []);
        } catch (error) {
            console.error('Erro ao buscar jogos:', error);
        }
    };

    useEffect(() => {
        puxarJogos();
    }, []);

    return (
        <>
            <section className={s.cardJogadores}>
                <img src={ney} alt="" />
                <img src={vinijr} alt="" />
            </section>
            <section className={s.containerGeral}>
                <h1>JOGOS</h1>
                <section className={s.containerPaiCards}>
                    <div className={s.container_card}>
                        {jogosCopa.map((jogo) => (
                            <div className={s.card} key={jogo.idEvent}>
                                <p>
                                    {jogo.dateEvent}
                                </p>
                                <h3 className={s.name}>
                                    {jogo.strHomeTeam} {jogo.intHomeScore ?? "-"}
                                    {" x "}
                                    {jogo.intAwayScore ?? "-"} {jogo.strAwayTeam}
                                </h3>
                                <p>
                                    {jogo.strTime}
                                </p>


                                <span>{jogo.strStatus || "Não iniciado"}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </section>
        </>


    );
}