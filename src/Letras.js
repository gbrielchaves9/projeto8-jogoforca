import React, { useState } from 'react';

export default function Letras(props) {
  const { letrasHabilitadas, onLetraClick } = props;
  const [jogadas, setJogadas] = useState(0);

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function handleClick(letra) {
    setJogadas(jogadas + 1);
    onLetraClick(letra);
  }

  return (
    <div>
      <div className="geladeira">
        {alfabeto.map(letra => (
          <button
            key={letra}
            disabled={!letrasHabilitadas.includes(letra) || jogadas >= 6}
            onClick={() => handleClick(letra)}
          >
            {letra}
          </button>
        ))}
      </div>
    </div>
  )
}