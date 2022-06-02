import { useDispatch } from "react-redux";
import { Child } from "./Child";
import { Child2 } from "./Child2";
import {
  countSlice,
  obtenerPokemonesAsync,
  obtenerUsuariosAsync
} from "./store";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  function handleAumentarClick() {
    dispatch(countSlice.actions.incrementar());
  }

  function handleUsuariosClick() {
    dispatch(obtenerUsuariosAsync());
  }

  function handlePokemonesClick() {
    dispatch(obtenerPokemonesAsync());
  }

  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleAumentarClick}>Aumentar</button>
      <button onClick={handleUsuariosClick}>Usuarios</button>
      <button onClick={handlePokemonesClick}>Pokemones</button>
      <Child />
      <Child2 />
    </div>
  );
}
