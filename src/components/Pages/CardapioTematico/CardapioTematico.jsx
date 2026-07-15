import s from "./cardapiotematico.module.scss";
import { useEffect, useState } from "react";
import CardComida from "./CardComida";

import { client } from "../../services/prismic";
import { asText } from "@prismicio/client";

import lupa from "../../../assets/CardapioTematico/lupa.png";

export default function CardapioTematico() {
    const [comidas, setComidas] = useState([]);

    useEffect(() => {
        const puxarDados = async () => {
            try {
                const resposta = await client.getAllByType("comidas");

                const formatar = resposta.map((item) => ({
                    id: item.id,
                    title: asText(item.data.namefood),
                    description: asText(item.data.description),
                    imgUrl: item.data.imgfood?.url,
                    preco: item.data.pricefood,
                }));

                setComidas(formatar);
            } catch (error) {
                console.error("Erro ao buscar dados", error);
            }
        };

        puxarDados();
    }, []);

    return (
        <section className={s.cardapio}>
            <header className={s.header}>
                <div className={s.titleArea}>
                    <span className={s.subtitle}>Sabores do Mundo</span>
                    <h2>Cardápio Temático</h2>
                    <p>
                        Explore pratos inspirados nas seleções participantes da Copa do
                        Mundo e escolha o seu favorito.
                    </p>
                </div>

                <div className={s.searchArea}>
                    <div className={s.filter}>
                        <img src={lupa} alt="Buscar" />
                        <input type="search" placeholder="Buscar prato..." />
                    </div>
                </div>
            </header>

            <section className={s.countryFilter}>
                <nav>
                    <ul>
                        <li>
                            <a className={s.country} href="">
                                Argentina
                            </a>
                        </li>

                        <li>
                            <a className={s.country} href="">
                                Brasil
                            </a>
                        </li>

                        <li>
                            <a className={s.country} href="">
                                EUA
                            </a>
                        </li>

                        <li>
                            <a className={s.country} href="">
                                Noruega
                            </a>
                        </li>

                        <li>
                            <a className={s.country} href="">
                                Alemanha
                            </a>
                        </li>

                        <li>
                            <a className={s.country} href="">
                                Escócia
                            </a>
                        </li>

                        <li>
                            <a className={s.country} href="">
                                Inglaterra
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>

            <main className={s.content}>
                <section className={s.containerCardapio}>
                    {comidas.map((comida) => (
                        <CardComida
                            key={comida.id}
                            id={comida.id}
                            title={comida.title}
                            description={comida.description}
                            imgUrl={comida.imgUrl}
                            preco={comida.preco}
                        />
                    ))}
                </section>
            </main>
        </section>
    );
}