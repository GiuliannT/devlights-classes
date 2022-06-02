import { useDispatch, useSelector } from "react-redux";
import { CrudContext } from "./contexts/CrudContext";
import { countSlice } from "./store";

export function Child() {
  const user = useSelector((state) => state.user);
  const pokemones = useSelector((state) => state.pokemones);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function handleEnviarMensajeClick() {
    dispatch(countSlice.actions.enviarMensaje("Hola"));
  }

  console.log("render child");

  return (
    <CrudContext.Provider
      value={{
        data: []
      }}
    >
      <div>
        <h1>Hijo</h1>
        <h2>{count}</h2>
        <h3>Texto del store: {user} </h3>
        <pre>{JSON.stringify(pokemones, null, 2)}</pre>
        <button onClick={handleEnviarMensajeClick}>
          Enviar mensaje a mi hermano{" "}
        </button>
      </div>
    </CrudContext.Provider>
  );
}
