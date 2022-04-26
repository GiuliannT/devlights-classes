// ------------------------------- funciones ----------------------------------------

// import './styles.css';

// export function App() {

//   const handleClick = () => {
//     console.log('Hola Mundo')
//   }

//   const handleClick2 = (name) => {
//     return () => {
//       console.log('Hola', name)
//     }
//   }

//   const handleChange = event => {
//     console.log(event.target.value)
//   }

//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <h2>Start editing to see some magic happen</h2>
//       <button onClick={handleClick}>hello world</button>
//       <button onClick={handleClick2('juan')}>hello name</button>
//       <input type="text" onChange={handleChange}/>
//     </div>
//   );
// }

// ------------------------------- logical-state ----------------------------------------

// import "./styles.css";
// import { useMyState } from "./use-my-state";

// export function App() {
//   const { state, handleAgeChange, handleUserChange } = useMyState();

//   function handleUsuarioButtonClick() {
//     handleUserChange("Pepito");
//   }

//   function handleEdadButtonClick() {
//     handleAgeChange(30);
//   }

//   return (
//     <div className="App">
//       <h1>{state.user}</h1>
//       <h2>{state.age}</h2>
//       <button onClick={handleUsuarioButtonClick}>Cambiar Usuario</button>
//       <button onClick={handleEdadButtonClick}>Cambiar Edad</button>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// -------------------------------  ----------------------------------------

import { useState } from "react";
import { Item } from "./Item";
import "./styles.css";

export function App() {

  const [state, setState] = useState(['1', '2', '3']);

  const handleActualizarEstado = () => {
    setState([...state, '4']);
    // setState(state.concat('4'));
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Start editing to see some magic happen</h2>
      {
        state.map((item, index) => (
          <Item key={`item-${index}`} text={item} />
        ))
      }
      {/* Te lo agrega pero tira el error de que 'text' NO es un string */}
      {<Item text={999} />}  
      <button onClick={handleActualizarEstado}>Actualizar estado</button>
    </div>
  );
}

// -------------------------------  ----------------------------------------