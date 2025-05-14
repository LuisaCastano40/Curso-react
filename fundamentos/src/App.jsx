import './App.css'
// App.jsx -> App.js EL COMPONENTE principal
// Componente en React -> Una función de javascript  que retornan contenido HTML

// SINTANXIS JSX -> es escribir html en JS
export function App() {


  return (
    // comentario de js -> parte de lógica 
    // Fragment -> cajita -> ponga el contenido de su componente y no genere ningun elemento en el DOM
    <>
      {/* comentario en la vista -html */}
      <h1>Hola Mundo</h1>
      <p>Hola, este es la clase introductoria fundamentos</p>
    </>
  )
}

export default App


