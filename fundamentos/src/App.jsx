import './App.css';
import { MyButton } from './components/MyButton.jsx';

// App.jsx -> App.js EL COMPONENTE principal
// Componente en React -> Una función de javascript  que retornan contenido HTML

// SINTANXIS JSX -> es escribir html en JS
export function App() {

  //variables
  let isLoggedIn = true;
  let mensaje = "";
  let usuarios = [
    { name: "Luisa", id: 123 },
    { name: "Esteban", id: 456 },
    { name: "Luisa", id: 789 },
  ]


  /*
    isLoggedIn -> isLoggedIn === true
    !isLoggedIn ->  isLoggedIn === false
   */

  // condicionales
  if (isLoggedIn) {
    mensaje = "Bienvenidos pepitos y pèpitas";
  } else {
    mensaje = "Inicie sesión";
  }

  // Funciones
  function handleClick() {
    alert('Holaaaa desarrolladores de React');
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
        <li>Agregar estilos</li>
        <li>Paso de propiedades o (props) entre componentes</li>
        <li>Manejo de eventos </li>
        <li>Renderizado de listas</li>
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
        <MyButton />
      </section>

      <hr />
      <section>
        <h2>Renderizado condicional</h2>
        <p>la capacidad de mostrar u ocultar elementos de HTML a partir de una condición - verdad o falsa</p>

        {/* forma 1 */}
        <h3>{mensaje}</h3>

        {/* forma 2 : condicional ternario */}
        {isLoggedIn ? <h2>Bienvenido de nuevo</h2> : <h2>Inicie sesión de nuevo</h2>}
      </section>

      <hr />

      <section style={{ backgroundColor: "lightblue", padding: "50px" }}>
        <h2 className='titulo'>Añadir estilos</h2>
        <p>Podemos manejar estilos de varias formas</p>
        <ol>
          <li>Estilos en línea con el atributo style</li>
          <li>Uso de estilos globales - importamos la hoja de estilos</li>
          <li>Uso de estilos modulares - la trabajamos en cada componente</li>
        </ol>
        <MyButton />
      </section>

      <hr />

      <section>
        <h2> Manejo de eventos y envío de props</h2>
        <p>Para darle funcionalidad, controlar contenido e interacciones</p>

        <p>Las props o propiedades, son parámetros que podemos enviar a un componente hijo desde un componente padre - comunicación entre componentes</p>

        <MyButton func={handleClick} text="Bontón de saludo" />

        <MyButton text="eliminar" />
        <MyButton text="actualizar" />
        <MyButton text="crear" />

      </section>

      <hr />

      <section>
        <h2>Renderizado de Listas</h2>
        <p>Es que podamos mostrar colecciones de datos, sin importar el tamaño de dicha colección</p>

        <p>Para recorrer listas en React se utiliza el método <strong>map()</strong>. funciona como un ciclo que recorre la lista, pero requiere un identificador <strong>Key</strong> </p>

        {
          isLoggedIn && (<ul>
            {
              usuarios.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))
            }
          </ul>
          )
        }

      </section>


    </>
  )
}




