import React, { useState } from 'react';

import forca0 from "./assets/forca0.png";

export default function Jogo(props) {
    const {habilitar} = props
    
    
    return (
        <>
            <div className="Jogo">
                <div className="forca">
                    <img src={forca0} alt="forca0" />
                </div>
                <button  data-test="letter" className="botaoStart"onClick={habilitar} >Escolher Palavra</button>
            </div>
        </>
    )
}

