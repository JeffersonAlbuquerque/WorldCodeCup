import s from './grupos.module.scss'


//importação dos grupos.

//Grupos A and F
import GPA from '../../assets/Grupos/Group.png'
import GPB from '../../assets/Grupos/Group-2.png'
import GPC from '../../assets/Grupos/Group-3.png'
import GPD from '../../assets/Grupos/Group-4.png'
import GPE from '../../assets/Grupos/Group-5.png'
import GPF from '../../assets/Grupos/Group-6.png'


//Grupos A and F
import GPG from '../../assets/Grupos/Group-7.png'
import GPH from '../../assets/Grupos/Group-8.png'
import GPI from '../../assets/Grupos/Group-9.png'
import GPJ from '../../assets/Grupos/Group-10.png'
import GPK from '../../assets/Grupos/Group-11.png'
import GPL from '../../assets/Grupos/Group-12.png'

//Taça
import logo from '../../assets/Grupos/GroupStageLogo.png'

export default function Grupos()
{
    return(
        <section className={s.containerPai}>
            <h1 className={s.title}>FIFA WORLD CUP 2026</h1>
            <section className={s.containerGrupos}>
                <section className={s.cardGrupos1}>
                    <img src={GPA} alt="" />
                    <img src={GPB} alt="" />
                    <img src={GPC} alt="" />
                    <img src={GPD} alt="" />
                    <img src={GPE} alt="" />
                    <img src={GPF} alt="" />
                </section>
                <img className={s.logo} src={logo} alt="" />
                <section className={s.cardGrupos2}>
                    <img src={GPG} alt="" />
                    <img src={GPH} alt="" />
                    <img src={GPI} alt="" />
                    <img src={GPJ} alt="" />
                    <img src={GPK} alt="" />
                    <img src={GPL} alt="" />
                </section>
            </section>
        </section>
    )
}