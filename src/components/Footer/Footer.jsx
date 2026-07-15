import s from "./footer.module.scss";
import {
  House,
  Trophy,
  UtensilsCrossed,
  CalendarDays,
  CalendarCheck,
  MapPin,
  ShieldCheck,
  Mail,
  Phone
} from "lucide-react";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.footerLinks}>
        <nav>
          <div className={s.titles}>
            <h2>Navegação</h2>
            <div className={s.line}></div>
          </div>

          <ul className={s.navigation}>
            <li>
              <House size={18} />
              <a href="#inicio">Início</a>
            </li>

            <li>
              <Trophy size={18} />
              <a href="#jogos">Jogos</a>
            </li>

            <li>
              <UtensilsCrossed size={18} />
              <a href="#cardapio">Cardápio</a>
            </li>

            <li>
              <CalendarDays size={18} />
              <a href="#agenda">Agenda</a>
            </li>

            <li>
              <CalendarCheck size={18} />
              <a href="#reservas">Reservas</a>
            </li>

            <li>
              <MapPin size={18} />
              <a href="#localizacao">Localização</a>
            </li>
          </ul>
        </nav>

        <div className={s.privacyP}>
          <div className={s.titles}>
            <h2>Legal</h2>
            <div className={s.line}></div>
          </div>

          <a href="#">
            <ShieldCheck size={18} />
            Política de Privacidade
          </a>
        </div>

        <div className={s.contact}>
          <div className={s.titles}>
            <h2>Contato</h2>
            <div className={s.line}></div>
          </div>

          <p>
            <Mail size={18} />
            botecodohexa@boteco.com.br
          </p>

          <p>
            <Phone size={18} />
            +55 (85) 99451-7317
          </p>
        </div>
      </section>

      <section className={s.socialMedia}>
        <nav>
          <ul className={s.socialList}>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >

              </a>
            </li>

            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >

              </a>
            </li>

            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
              </a>
            </li>

            <li>
              <a
                href="https://twitch.tv"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitch"
              >
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}