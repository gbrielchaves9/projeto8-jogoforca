import { useState } from "react";
import alfabeto from "./alfabeto";
import palavras from "./palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";

export default function App() {
 const [habilitar, setHabilitar] = useState([]);
 const [tentativas, setTentativas] = useState(0);
 const [letrasHabilitadas, setLetrasHabilitadas] = useState(alfabeto);
  const [palavraOculta, setPalavraOculta] = useState([]);
  //const [jogoComecou, setJogoComecou] = useState(false);

 /* function escolherPalavra() {
    setLetrasHabilitadas([])
    const indice = Math.floor(Math.random() * palavras.length);
  setPalavraOculta(palavras[indice]);
  }
  function getPalavraMostrada() {
    if (!habilitar) return "";
    return palavraOculta
      .split("")
      .map((letra) => (letrasHabilitadas.includes(letra) ? "_" : letra))
      .join("");
  }
  */
  function escolherPalavra() {
    const indice = Math.floor(Math.random() * palavras.length)
    const palavra = palavras[indice]
    const palavraOculta= palavra.split("")
  //  setPalavraOculta(palavraOculta)
    let getPalavraMostrada = []
    palavraOculta.forEach(() => getPalavraMostrada.push(" _"))
    setHabilitar(getPalavraMostrada)
  }

 
  return (
    <>
      <Jogo
       // habilitar={habilitar}
       tentativas={tentativas}
        habilitar={habilitar}
        escolherPalavra={escolherPalavra}
       // palavraOculta={palavraOculta}
      />
      <Letras
       letrasHabilitadas={letrasHabilitadas}
       // onLetraClick={onLetraClick}
      //  jogoComecou={jogoComecou}
      />
    </>
  );
}