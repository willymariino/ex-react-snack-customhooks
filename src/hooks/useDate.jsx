/*
🏆 Snack 2: useDate() – Ottenere la Data Attuale
Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

Cosa deve fare?

Restituisce un oggetto con data e ora formattata.
Si aggiorna automaticamente ogni secondo.
Usa useEffect() per gestire l’aggiornamento.
Esempio di utilizzo:

import useDate from "./useDate";

function App() {
  const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
}

export default App;

*/

import { useState, useEffect } from "react";


function useDate() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date())

    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentDateTime(new Date())
        }, 1000) // si aggiorna ogni secondo

        return () => clearInterval(timer) // funzione di cleanup -> ferma la funzione quando il componente viene smontato e non viene più reindirizzato in pagina

    }, [])

    return currentDateTime
}

export default useDate