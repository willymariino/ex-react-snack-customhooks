/*

🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

Cosa deve fare?

Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
Posiziona il componente al posto del puntatore del mouse.
Il componente segue i movimenti del mouse.
Esempio di utilizzo:

import useCustomPointer from "./useCustomPointer";

import useCustomPointer from "./useCustomPointer";

function App() {
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}

export default App;

*/

import { useState, useEffect } from "react";

function useCustomPointer(component) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const handleMouseMove = e => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)

  }, [])

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        cursor: "none"
      }}
    >

      {component}

    </div>
  )

}

export default useCustomPointer