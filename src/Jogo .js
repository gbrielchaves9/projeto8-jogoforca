import React from 'react';
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

export default function Jogo(props) {
  const { habilitar, tentativas } = props;
  const forcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const forcaAtual = forcas[tentativas];

  return (
    <div className="Jogo">
      <div className="forca">
        <img src={forcaAtual} alt={`forca${tentativas}`} />
      </div>
      <button className="botaoStart" onClick={habilitar}>Escolher Palavra</button>
    </div>
  );
}