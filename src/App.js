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

  function escolherPalavra() {
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
  

 
  return (
    <>
      <Jogo
       // habilitar={habilitar}
       tentativas={tentativas}
        //getPalavraMostrada={getPalavraMostrada}
        escolherPalavra={escolherPalavra}
      />
      <Letras
       letrasHabilitadas={letrasHabilitadas}
       // onLetraClick={onLetraClick}
      //  jogoComecou={jogoComecou}
      />
    </>
  );
}