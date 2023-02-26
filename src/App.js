import { useState } from "react";
import alfabeto from "./alfabeto";
import palavras from "./palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";

export default function App() {
  const [habilitar, setHabilitar] = useState(false);
  const [tentativas, setTentativas] = useState(0);
  const [letrasHabilitadas, setLetrasHabilitadas] = useState(alfabeto);
  const [palavraOculta, setPalavraOculta] = useState("");

  function escolherPalavra() {
    const indice = Math.floor(Math.random() * palavras.length);
    setPalavraOculta(palavras[indice]);
    setLetrasHabilitadas(alfabeto);
    setTentativas(0);
    setHabilitar(true);
  }

  function onLetraClick(letra) {
    setLetrasHabilitadas((prev) => prev.filter((l) => l !== letra));
    if (!palavraOculta.includes(letra)) {
      setTentativas((prev) => prev + 1);
    }
  }

  function getPalavraMostrada() {
    if (!habilitar) return "";

    let palavra = "";
    for (let i = 0; i < palavraOculta.length; i++) {
      if (!letrasHabilitadas.includes(palavraOculta[i])) {
        palavra += palavraOculta[i];
      } else {
        palavra += "_";
      }
    }
    return palavra;
  }

  return (
    <>
      <Jogo
        habilitar={habilitar}
        tentativas={tentativas}
        getPalavraMostrada={getPalavraMostrada}
        escolherPalavra={escolherPalavra}
      />
      <Letras letrasHabilitadas={letrasHabilitadas} onLetraClick={onLetraClick} />
    </>
  );
}