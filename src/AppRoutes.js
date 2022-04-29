import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";

export const AppContext = createContext();

const sayHello = () => {
  console.log('Hello');
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <AppContext.Provider value={{sayHello}}>
      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}