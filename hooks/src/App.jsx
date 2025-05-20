import { useState } from "react";

function App() {

  let count1 = 0;//variable de JS
  const [count2, setCount2] = useState(0); //variable de estado
 

  function handleCount () {
    count1++ //opcion 3  
    console.log('Count: '+ count1);
    setCount2(count2 + 1) //la cambiar esta variable se vuelve a renderizar la página
  }


  return (
    <>
      <h1>Contador Reactivo con useState y con useEffect</h1>
      <p>Este es una práctica guiada, para entender los conceptos y usos de los Hooks useState y useEffect a partir de controlar el valor de un contador.

        <br />
        -  Qué són los estados locales (como actualizamos contenido para que se muestre)
        <br />
        - y Que son los efectos (acciones que se ejecutan cuando el valor 'state' cambia)
      </p>


      <section>
        <h2>Contador JS: {count1} </h2>
        <h2>Contador de estado: {count2}</h2>

        <button onClick={handleCount}>Incrementar</button>
      </section>
    </>
  )
}

export default App
