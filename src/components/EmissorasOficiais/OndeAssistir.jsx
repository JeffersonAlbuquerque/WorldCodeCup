import s from './ondeassistir.module.scss'

//TV ABERTA
import globo from '../../assets/LogoEmissoras/globo.png'
import sbt from '../../assets/LogoEmissoras/sbt.png'

//streaming

import globoP from '../../assets/LogoEmissoras/globop.png'
import caze from '../../assets/LogoEmissoras/cazetv.png'
import getv from '../../assets/LogoEmissoras/getv.png'
import nsports from '../../assets/LogoEmissoras/nsports.png'
import sportv from '../../assets/LogoEmissoras/sportv.png'

export default function OndeAssistir() {
    return (
        <>
            <h1>Onde Assistir</h1>
            <section className={s.containerEmissoras1}>
                <h1>TV Aberta</h1>
                <nav className={s.nav1}>
                    <ul className={s.ul}>
                        <li><a href="https://mais.sbt.com.br"><img src={sbt} alt="" /></a></li>
                        <li><a href=""><img src={globo} alt="" /></a></li>
                    </ul>
                </nav>
            </section>
            <section className={s.containerEmissoras2}>
                <h1>Streamings</h1>
                <nav className={s.nav2}>
                    <ul className={s.ul2}>
                        <li><a href="https://mais.sbt.com.br"><img src={globoP} alt="" /></a></li>
                        <li><a href=""><img src={caze} alt="" /></a></li>
                        <li><a href=""><img src={getv} alt="" /></a></li>
                        <li><a href=""><img src={nsports} alt="" /></a></li>
                        <li><a href=""><img src={sportv} alt="" /></a></li>
                    </ul>
                </nav>
            </section>
        </>


    )
}