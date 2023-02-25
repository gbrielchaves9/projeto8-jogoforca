import alfabeto from "./alfabeto";
export default function Letras(props) {
    function comer(comida) {
        alert(` escolhi a letra ${comida} `);
    }
    return (
        <>
            <div>
                <div className="geladeira">
                    {props.letrasHabilitadas.map((item) => (
                        <button
                            key={item.letra}
                            onClick={() => comer(item.letra)}
                            disabled={!item.habilitado}
                            data-test="letter"
                        >
                            {item.letra}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
