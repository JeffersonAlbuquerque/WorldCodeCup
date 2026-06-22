import { useState } from 'react';
import s from './header.module.scss';

import { Link } from 'react-router-dom';

import logo from '../../assets/WorldCupHeader/fifaWorldCupLogo.png';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <nav className={s.nav}>

                    <div className={s.mobileTop}>
                        <img
                            src={logo}
                            alt="Logo da Copa"
                            className={s.logoImage}
                        />

                        <button
                            className={s.hamburger}
                            onClick={() => setMenuAberto(!menuAberto)}
                        >
                            {menuAberto ? '✕' : '☰'}
                        </button>
                    </div>

                    <ul
                        className={`${s.headerList} ${menuAberto ? s.active : ''
                            }`}
                    >
                        <li className={s.menu}>
                            <Link to="/">Início</Link>
                        </li>

                        <li className={s.menu}>
                            <Link to="cardapio-tematico">
                                Cardápio Temático
                            </Link>
                        </li>

                        <li className={s.menu}>
                            <a href="">Eventos</a>
                        </li>

                        <li className={s.logo}>
                            <img
                                src={logo}
                                alt="Logo da Copa"
                                className={s.logoImage}
                            />
                        </li>

                        <li className={s.menu}>
                            <a href="">Seleções</a>
                        </li>

                        <li className={s.menu}>
                            <a href="">Estádios</a>
                        </li>

                        <li className={s.menu}>
                            <a href="">Onde Assistir</a>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
    );
}