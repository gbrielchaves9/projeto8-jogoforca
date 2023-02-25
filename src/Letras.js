import alfabeto from "./alfabeto";
export default function Letras(props) {
    function comer(comida) {
        alert(` escolhi a letra ${comida} `);
    }
    return (
        <>
            <div>
                <div className="geladeira">
                    {alfabeto.map((c) => (
                        <button onClick={() => comer(c)} disabled={false}>
                            {c}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
