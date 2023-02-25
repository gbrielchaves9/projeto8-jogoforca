import forca0 from "./assets/forca0.png";

export default function Jogo() {
    return (
        <>
            <div className="Jogo">
                <div className="forca">
                    <img src={forca0} alt="forca0" />
                </div>
                <button className="botaoStart">Escolher Palavra</button>
            </div>
        </>
    )
}