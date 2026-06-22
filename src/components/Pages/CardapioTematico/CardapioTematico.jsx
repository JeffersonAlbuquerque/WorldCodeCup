import s from './cardapiotematico.module.scss';
import { useEffect, useState } from 'react';
import CardComida from './CardComida';

import { client } from '../../services/prismic';
import { asText } from '@prismicio/client';

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
        <>
        <section>
            <nav>
                <ul>
                    <li><a href="">a</a></li>
                </ul>
            </nav>
        </section>
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
        </>

    );
}