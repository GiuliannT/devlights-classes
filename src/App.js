import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import { createContext, useState } from "react";

export const DashboardContext = createContext();

function App() {
  const [isLogged, setIsLogged] = useState(window.localStorage.getItem("isLogged") === 'true');
  
  const onSuccess = () => {
    setIsLogged(true);
  }
  const onLogout = () => {
    setIsLogged(false);
    window.localStorage.removeItem("isLogged");
  }
  
  return (
    <>
      <BrowserRouter>
        <DashboardContext.Provider value={{
          onLogout
        }} >
        <Routes>
          <Route path="/" element={isLogged ? <Dashboard /> : <Landing />} />
          {isLogged ? null : <Route path="/login" element={<Login onSuccess={onSuccess} />} />}
          {/* 404 not found / no match */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
        </DashboardContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
