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

          

          <button type="submit">
            Reservar Mesa
          </button>

        </form>
      </div>
    </section>
  );
}