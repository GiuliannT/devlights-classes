import { useState } from "react";

export function useMyState() {
  const [state, setState] = useState({
    user: "Agus",
    age: 29
  });

  function handleUserChange(newUser) {
    setState((prevState) => ({
      ...prevState,
      user: newUser
    }));
  }

  function handleAgeChange(newAge) {
    setState((prevState) => ({
      ...prevState,
      age: newAge
    }));
  }

  return { state, handleAgeChange, handleUserChange };
}
