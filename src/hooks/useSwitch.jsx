/*
🏆 Snack 1: useSwitch() – Toggle Booleano
Creare un custom hook per alternare un valore booleano tra true e false.

Cosa deve fare?

Inizialmente false.
Ritorna il valore attuale e una funzione toggle() per cambiarlo.
Quando toggle() viene chiamato, il valore passa da true → false e viceversa.
Esempio di utilizzo:

import useSwitch from "./useSwitch";

function App() {
  const [isOn, toggle] = useSwitch();

 return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
}

export default App;


*/

import { useCallback, useState } from "react";

function useSwitch(initialvalue = false) {

  const [state, setState] = useState(initialvalue)

  const toggle = useCallback(() => {
    setState((prevState) => !prevState)
  }, [])

  return [state, toggle]



}

export default useSwitch