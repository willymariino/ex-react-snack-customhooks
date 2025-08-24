/*

🎯 Bonus: useKeyPress() – Rilevare un Tasto Premuto
Creare un custom hook che rilevi se un tasto specifico della tastiera è premuto.

Cosa deve fare?

Prende in input il nome di un tasto ("Enter", "Escape", ecc.).
Ritorna true quando il tasto è premuto e false quando viene rilasciato.
Usa event listener su keydown e keyup.
Esempio di utilizzo:

import useKeyPress from "./useKeyPress";

function App() {
  const isEnterPressed = useKeyPress("Enter");

  return (
    <div>
      <h1>Tieni premuto "Enter" per testare il custom hook</h1>
      <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
    </div>
  );
}

export default App;


*/

import { useEffect, useState } from "react";

export default function useKeyPress(targetKey) {

    const [isPressed, setIsPressed] = useState(false)

    useEffect(() => {

        const handleKeyDown = e => {
            // setIsPressed(e.key === targetKey)
            if (e.key === targetKey) setIsPressed(true)
            console.log(e)

        }

        const handleKeyUp = e => {
            if (e.key === targetKey) setIsPressed(false)
        }

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyUp", handleKeyUp)

        // return () => window.removeEventListener("keyDown, handleKeyDown")  non posso più chiudere la mia cleanUp function in una riga, perchè devo eseguire due operazioni, (aggiungere il removeEventListener per la funzione KeyUp)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }

    }, [])

    return isPressed

}