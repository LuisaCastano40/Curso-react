import './App.css'
import { Formulario1 } from './components/formulario1'
import {Formulario2} from './components/Formulario2'

function App() {

 
  return (
    <>
      {/* Encabezado */}
      <header>
        <h1>Formularios con React</h1>
      </header>

      {/* contenido principal */}
      <main>
          <Formulario1 />
          <Formulario2 />
      </main>

      {/* pie de página */}
      <footer>
        Creado por Luisa Castaño 2025 - Curso React BIT
      </footer>
    </>
  )
}

export default App
