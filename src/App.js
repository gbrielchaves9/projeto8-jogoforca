import { useState } from "react"
//import alfabeto from "./alfabeto";
//import palavras from "./palavras";
import Jogo from "./Jogo ";
import Letras from "./Letras";

export default  function App() {
  const [HabilitarBotao, setHabilitador] = useState(false)


  function habiliar() {
    setHabilitador(!HabilitarBotao)
    alert("ok")
  }
  return (
    <>
       <Jogo habilitar={habiliar}/>
       <Letras />
       

    </>
  )
}
