import s from './Cards.module.scss'
const CardsCarroussel = ({
    imageUrl = ""
}) => {
    return(
        <img className={s.img} src={imageUrl} alt="" />
    )
}
export default CardsCarroussel;