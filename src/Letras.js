import alfabeto from "./alfabeto";
export default function Letras(props) {
    return (
      <>
        <div>
          <div className="geladeira">
            {props.letrasHabilitadas.map((item) => (
              <button
                key={item.letra}
                onClick={() => props.onLetraClick(item.letra)}
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
  
