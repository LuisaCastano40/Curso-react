import './App.css'
import { MyButton } from './components/MyButton.jsx'

// App.jsx -> App.js EL COMPONENTE principal
// Componente en React -> Una función de javascript  que retornan contenido HTML

// SINTANXIS JSX -> es escribir html en JS
export function App() {

  //variables
  let isLoggedIn = true;
let  mensaje = "";


  /*
    isLoggedIn -> isLoggedIn === true
    !isLoggedIn ->  isLoggedIn === false
   */
  
  // condicionales
    if(isLoggedIn){
      mensaje = "Bienvenidos pepitos y pèpitas";
    } else {
      mensaje = "Inicie sesión";
    }

  return (
    // comentario de js -> parte de lógica 
    // Fragment -> cajita -> ponga el contenido de su componente y no genere ningun elemento en el DOM
    <>
      {/* comentario en la vista -html */}
      <h1>Fundamentos de React</h1>
      <p>Este espacio tendrá el contenido de la semana de introsucción a React.js</p>

      <p>Los temas que vamos a ir abordando son:</p>
       {/* Listas en HTML UL -> unOrdered list  ol-> Ordered list */}

        
       <ul>
        <li>sintaxis JSX</li>
        <li>Creación y anidación de componentes</li>
        <li>Renderizado condicional</li>
        <li>Renderizado de listas</li>
        <li>Agregar estilos</li>
        <li>Paso de propiedades o (props) entre componentes</li>
        <li>Manejo de eventos </li>
        <li>Ciclos de vida y estados de los componentes en React</li>
       </ul>

       <hr />

       <section>
        <h2>Sintaxis JSX</h2>
        <p>Una forma de escribir código de javaScript que permite escribir HTML dentro </p>
       </section>

        <hr />

       <section>
        <h2>Componentes de React</h2>
        <p>Es la base de React - <strong> Es una función que retorna HTML </strong> para permitirnos reutilizar y estructurar un proyecto en React </p>
        <MyButton/>
       </section>

        <hr />
       <section>
          <h2>Renderizado condicional</h2>
          <p>la capacidad de mostrar u ocultar elementos de HTML a partir de una condición - verdad o falsa</p>

            {/* forma 1 */}
            <h3>{mensaje}</h3>

            {/* forma 2 : condicional ternario */}
            {isLoggedIn ? <h2>Bienvenido de nuevo</h2> :<h2>Inicie sesión de nuevo</h2> }
       </section>

       <hr />

       <section style={{backgroundColor: "lightblue", padding: "50px"}}>
        <h2 className='titulo'>Añadir estilos</h2>
        <p>Podemos manejar estilos de varias formas</p>
        <MyButton />
       </section>

    </>
  )
}




