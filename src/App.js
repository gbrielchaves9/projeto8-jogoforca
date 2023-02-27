import { useState } from "react";
import alfabeto from "./alfabeto";
import palavras from "./palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";

export default function App() {
  const [habilitar, setHabilitar] = useState([]);
  const [tentativas, setTentativas] = useState(0);
  const [letrasHabilitadas, setLetrasHabilitadas] = useState(alfabeto);
  const [palavraOculta, setPalavraOculta] = useState("");
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);

  function escolherPalavra() {
    setAcertos(0);
    setErros(0);
    const indice = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[indice];
    setPalavraOculta(palavra);
    let getPalavraMostrada = [];
    palavra.split("").forEach(() => getPalavraMostrada.push("_"));
    setHabilitar(getPalavraMostrada);
    setLetrasHabilitadas([])
  }

  function onLetraClick(letra) {
    if (erros >= 6) {
      return;
    }
    if (!palavraOculta.includes(letra)) {
      setErros(erros + 1);
      if (erros === 4) {
        setHabilitar(palavraOculta);
      }
    } else {
      const novosHabilitar = palavraOculta
        .split("")
        .map((letraDaPalavra, index) =>
          letraDaPalavra === letra ? letra : habilitar[index]
        );
      setHabilitar(novosHabilitar);
      setAcertos(acertos + 1);
    }
  }

  return (
    <>
      <Jogo
        tentativas={tentativas}
        habilitar={habilitar}
        escolherPalavra={escolherPalavra}
      />
      <Letras letrasHabilitadas={letrasHabilitadas} onLetraClick={onLetraClick} />
    </>
  );
}