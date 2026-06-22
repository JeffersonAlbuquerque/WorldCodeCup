import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import CardapioTematico from "./components/Pages/CardapioTematico/CardapioTematico.jsx"

import './GlobalStyle/globalstyle.scss'
import Inicio from "./components/Pages/Inicio/Inicio.jsx"
import Footer from "./components/Footer/Footer.jsx"

export default function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio-tematico" element={<CardapioTematico />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}