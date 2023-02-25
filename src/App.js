import { useState } from "react"
import alfabeto from "./alfabeto";
import palavras from "./palavras";
import Jogo from "./Jogo ";
import Letras from "./Letras";

export default function App() {
  const [habilitarBotao, setHabilitarBotao] = useState(false);
  const [letrasHabilitadas, setLetrasHabilitadas] = useState(
    alfabeto.map((letra) => ({ letra, habilitado: false }))
  );
  const [tentativas, setTentativas] = useState(0);

  function habilitar() {
    setHabilitarBotao(!habilitarBotao);
    setLetrasHabilitadas(
      letrasHabilitadas.map((letra) => ({ ...letra, habilitado: true }))
    );
  }

  function incrementarTentativas() {
    setTentativas(tentativas + 1);
  }

  function palavraAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[indiceAleatorio];
    const arrayPalavra = Array.from(palavra, () => "_");
    return { palavra, arrayPalavra };
  }




  return (
    <>
      <Jogo
        habilitar={habilitar}
        tentativas={tentativas}
      />
      <Letras letrasHabilitadas={letrasHabilitadas} incrementarTentativas={incrementarTentativas} />
    </>
  );
}