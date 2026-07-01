import Main from "../../Main/Main.jsx"
import Jogos from "../../Jogos/Jogos.jsx"
import Grupos from "../../Grupos/Grupos.jsx"
import SedeJogos from "../../SedeJogos/SedeJogos.jsx"
import OndeAssistir from "../../EmissorasOficiais/OndeAssistir.jsx"
import CarrousselAtracoes from "../../CarrousselAtracoes/CarrousselAtracoes.jsx"
import Reservas from "../../Reservas/Reservas.jsx"

export default function Inicio() {
    return (
        <>
            <Main></Main>
            <CarrousselAtracoes></CarrousselAtracoes>
            <Reservas></Reservas>
        </>
    )
}