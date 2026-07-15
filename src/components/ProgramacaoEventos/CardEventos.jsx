import { Beer, Music2 } from "lucide-react";
import s from "./EventoCard.module.scss";

export default function CardEventos({
  hora,
  titulo,
  tipo,
  destaque = false,
}) {
  const Icone = tipo === "PROMO" ? Beer : Music2;

  return (
    <div className={`${s.card} ${destaque ? s.destaque : ""}`}>
      <div className={s.esquerda}>
        <div className={s.icone}>
          <Icone size={26} />
        </div>

        <span className={s.hora}>{hora}</span>

        <h3>{titulo}</h3>
      </div>

      <span className={s.tag}>{tipo}</span>
    </div>
  );
}