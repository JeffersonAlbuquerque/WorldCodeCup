import s from './Reservas.module.scss';

export default function Reservas() {
  return (
    <section className={s.container}>
      <div className={s.conteudo}>
        <h1>Faça sua Reserva</h1>

        <p>
          Reserve sua mesa e venha torcer pela Seleção Brasileira no Boteco do Hexa.
        </p>

        <form className={s.formulario}>

          <div className={s.grupoInput}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
            />
          </div>

          <div className={s.grupoInput}>
            <label>Telefone</label>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className={s.linha}>

            <div className={s.grupoInput}>
              <label>Pessoas</label>
              <input
                type="number"
                min="1"
                placeholder="4"
              />
            </div>

            <div className={s.grupoInput}>
              <label>Data</label>
              <input type="date" />
            </div>

          </div>

          <div className={s.linha}>

            <div className={s.grupoInput}>
              <label>Horário</label>
              <input type="time" />
            </div>

            <div className={s.grupoInput}>
              <label>Jogo</label>

              <select>
                <option>Brasil x Noruega</option>
                <option>Brasil x Marrocos</option>
                <option>Brasil x Haiti</option>
              </select>

            </div>

          </div>

          <div className={s.grupoInput}>
            <label>Observações</label>

            <textarea
              rows="5"
              placeholder="Alguma observação?"
            />

          </div>

          <div className={s.secaoLocalizacao}>

            <div className={s.cabecalhoLocalizacao}>
              <span className={s.iconeLocalizacao}>📍</span>
              <h3>Onde Estamos</h3>
            </div>

            <div className={s.informacoesLocalizacao}>

              <p className={s.endereco}>
                <strong>Boteco do Hexa</strong><br />
                Av. Paulista, 1234 - Bela Vista<br />
                São Paulo - SP, 01310-100
              </p>

              <div className={s.botoesLocalizacao}>

                <button
                  type="button"
                  className={s.botaoGps}
                >
                  🗺️ Google Maps
                </button>

                <button
                  type="button"
                  className={s.botaoGps}
                >
                  🧭 Waze
                </button>

              </div>

            </div>

            <div className={s.containerMapa}>
              <iframe
                className={s.mapa}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.097757741342!2d-46.65423022444029!3d-23.561411278806786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201234%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr"
                loading="lazy"
                title="Mapa"
              />
            </div>

            <div className={s.rodapeLocalizacao}>
              <span className={s.horarioFuncionamento}>
                🕐 Segunda a Domingo: 11h às 23h
              </span>
            </div>

          </div>

          <button type="submit">
            Reservar Mesa
          </button>

        </form>
      </div>
    </section>
  );
}