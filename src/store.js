import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,   // Generalmente para esto se usa useContext, createContext
  text: "",

  user: null,       // Para info del usuario se usa Redux
  settings: null,
};

const countSlice = createSlice({
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

// Forma vieja
function countReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCREMENT_BY":
      let number = 5;
      function addMore() {
        number += action.payload;
      }
      addMore();
      return { ...state, count: state.count + number };
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: countReducer,
});
