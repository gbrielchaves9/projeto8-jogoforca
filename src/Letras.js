
import React from 'react';

export default function Letras(props) {
  const { letrasHabilitadas, onLetraClick } = props;

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  return (
    <div>
      <div className="geladeira">
        {alfabeto.map(letra => (
          <button
            key={letra}
            disabled={!letrasHabilitadas.includes(letra)}
            onClick={() => onLetraClick(letra)}
          >
            {letra}
          </button>
        ))}
      </div>
    </div>
  );
}