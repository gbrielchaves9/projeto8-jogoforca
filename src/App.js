import { useState } from "react"
import alfabeto from "./alfabeto";
//import palavras from "./palavras";
import Jogo from "./Jogo ";
import Letras from "./Letras";

export default  function App() {
  const [HabilitarBotao, setHabilitador] = useState(false)
  const [letrasHabilitadas, setLetrasHabilitadas] = useState(
    alfabeto.map((letra) => ({ letra, habilitado: false }))
  );
 

  function habilitar() {
    setHabilitador(!HabilitarBotao);
    setLetrasHabilitadas(
      letrasHabilitadas.map((letra) => ({ ...letra, habilitado: true }))
    );
  }
  return (
    <>
       <Jogo habilitar={habilitar}/>
       <Letras letrasHabilitadas={letrasHabilitadas} />
    </>
  )
}
