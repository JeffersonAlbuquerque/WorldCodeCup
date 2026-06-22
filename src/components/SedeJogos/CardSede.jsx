import s from './cardsede.module.scss'
import logoFifa from '../../assets/WorldCupHeader/fifaWorldCupLogo.png'

//logos
import pontos from '../../assets/SedeJogos/trespts.png'

const CardSede = ({
    imageUrl = ""
}) => {
    return (
        <div className={s.cardSede}>
            <div className={s.topoCard}>
                <div className={s.perfil}>
                    <img className={s.logoFifa} src={logoFifa} alt="" />
                    <p className={s.title}>fifaworldcup</p>
                </div>
                <img className={s.pontinhos} src={pontos} alt="" />
            </div>
            <img className={s.imgLocal} src={imageUrl} alt="" />
        </div>
    )
}

export default CardSede;