//import React, { useState } from 'react';

export default function Letras(props) {
  const { letrasHabilitadas} = props;


  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 

  return (
    <div>
      <div className="geladeira">
        {alfabeto.map(letra => (
          <button data-test="letter"
            key={letra}
            disabled={letrasHabilitadas.includes(letra) }
            onClick={() => (letra)}
          >
            {letra}
          </button>
        ))}
      </div>
    </div>
  )
}