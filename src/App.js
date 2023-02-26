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
  const [palavraOculta, setPalavraOculta] = useState([]);

  function habilitar() {
    setHabilitarBotao(!habilitarBotao);
    setLetrasHabilitadas(
      letrasHabilitadas.map((letra) => ({ ...letra, habilitado: true }))
    );
    setTentativas(0);
    const palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraOculta(Array(palavraEscolhida.length).fill('_'));
  }

  function onLetraClick(letra) {
    const novaLetrasHabilitadas = letrasHabilitadas.map((item) => {
      if (item.letra === letra) {
        return { ...item, habilitado: false };
      } else {
        return item;
      }
    });
    setLetrasHabilitadas(novaLetrasHabilitadas);

    if (!palavraOculta.includes(letra)) {
      setTentativas(tentativas + 1);
      if (tentativas >= 5) {
        setLetrasHabilitadas(
          letrasHabilitadas.map((letra) => ({ ...letra, habilitado: false }))
        );
      }
    } else {
      const indicesLetra = [];
      for (let i = 0; i < palavraOculta.length; i++) {
        if (palavraOculta[i] === letra) {
          indicesLetra.push(i);
        }
      }
      const novaPalavraOculta = [...palavraOculta];
      for (const index of indicesLetra) {
        novaPalavraOculta[index] = letra;
      }
      setPalavraOculta(novaPalavraOculta);
    }
  }

  return (
    <>
      <Jogo habilitar={habilitar} tentativas={tentativas} palavraOculta={palavraOculta} />
      <Letras letrasHabilitadas={letrasHabilitadas} onLetraClick={onLetraClick} />
    </>
  );
}