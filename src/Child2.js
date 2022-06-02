import { useSelector } from "react-redux";

export function Child2() {
  const mensaje = useSelector((state) => state.mensaje);

  return (
    <div>
      <h1>Hijo 2</h1>
      <h3>Mensaje: {mensaje}</h3>
    </div>
  );
}
