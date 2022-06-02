import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  settings: null,
  count: 0,
  usuarios: [],
  pokemones: [],
  mensaje: ""
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    incrementar: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decrementar: (state) => {
      return { ...state, count: state.count - 1 };
    },
    setUsuarios: (state, action) => {
      return { ...state, usuarios: action.payload };
    },
    setPokemons: (state, action) => {
      return { ...state, pokemones: action.payload };
    },
    enviarMensaje: (state, action) => {
      return { ...state, mensaje: action.payload };
    }
  }
});

export const obtenerUsuariosAsync = () => async (dispatch) => {
  const response = await fetch("https://randomuser.me/api");
  const usuarios = await response.json();

  dispatch(countSlice.actions.setUsuarios(usuarios));
};

export const obtenerPokemonesAsync = () => async (dispatch) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemones = await response.json();

  console.log("pokemones", pokemones);

  dispatch(countSlice.actions.setPokemons(pokemones));
};

export const store = configureStore({
  reducer: countSlice.reducer
});

// function countReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENTAR":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENTAR":
//       return { ...state, count: state.count - 1 };
//     case "INCREMENTAR_X":
//       let number = 5;
//       function addMore() {
//         number += action.payload;
//       }

//       addMore();

//       return { count: state.count + number };
//     default:
//       return state;
//   }
// }

// export const incrementarAction = {
//   type: "INCR3MENTAR"
// };
