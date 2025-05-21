import { useState, useEffect } from "react";
import "./App.css"

function App() {

  // variables con js
  let count1 = 0;//variable de JS
  count1 = 10;

  // variables con React
  const [count2, setCount2] = useState(0); //variable de estado numero
  //const [texto, setTexto] = useState(""); //variable texto
  const [buleano, setBuleano] = useState(false);
  //const [array, setArray] = useState([1,2,3,4])
 
  function handleCount () {
    count1++ //opcion 3  
    console.log('Count: '+ count1);
    setCount2(count2 + 1) //la cambiar esta variable se vuelve a renderizar la página
  }

  //la función que se debe ejecutar , [variable de estado de la que depende la acción]
  useEffect(()=>{
    if(count2 === 5){
      alert('Has presionado el botón 5 veces')
    }
  }, [count2]);

  // También pueden generar acciones la primera vez que se renderiza el componente
  useEffect(()=>{
    alert('Bienvenidos a Hooks con React');
  }, []);


  function handleStyle() {
    setBuleano(!buleano)
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

        <h1 className= {buleano ? "color1" : "color2"}>titulo a cambiar</h1>
        <button onClick={handleStyle}>Cambio de color</button>

      </section>
    </>
  )
}

export default App
