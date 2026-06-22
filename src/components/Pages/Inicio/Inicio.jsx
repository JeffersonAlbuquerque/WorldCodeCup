import Main from "../../Main/Main.jsx"
import Jogos from "../../Jogos/Jogos.jsx"
import Grupos from "../../Grupos/Grupos.jsx"
import SedeJogos from "../../SedeJogos/SedeJogos.jsx"
import OndeAssistir from "../../EmissorasOficiais/OndeAssistir.jsx"


export default function Inicio() {
    return (
        <>
            <Main></Main>
            <Jogos></Jogos>
            <Grupos></Grupos>
            <SedeJogos></SedeJogos>
            <OndeAssistir></OndeAssistir>
        </>
    )
}