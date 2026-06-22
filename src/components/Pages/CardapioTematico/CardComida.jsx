import s from './cardcomida.module.scss';

//variáveis sobre as informações que vai receber do prismic.io
const CardComida = ({
    id,
    title = "",
    description = "",
    imgUrl = null,
    preco = "",
}) => {

    const truncateDesc =
        description.length > 100
            ? `${description.substring(0, 100)}...`
            : description;

    return (
        <section>
            <div className={s.cardFood}>
                <p className={s.name}>{title}</p>

                <img
                    className={s.img}
                    src={imgUrl}
                    alt={title}
                />

                <p className={s.description}>
                    {truncateDesc}
                </p>

                <p className={s.preco}>
                    R$ {preco}
                </p>

                <a className={s.btn} href="">
                    Saiba Mais
                </a>
            </div>
        </section>
    );
};

export default CardComida;