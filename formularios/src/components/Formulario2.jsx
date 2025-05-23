import React from 'react'
import { useForm } from 'react-hook-form'
// Este es el hook principal de la librería
// rfc -> shortcut para crear componentes de React Rápido
export function Formulario2() {
  const {register, handleSubmit} = useForm();
  // Acceder a las funciones ùtiles de useForm
  // register: se usa para conectar los inputs con los datos del form
  // handleSubmit: recoger los datos del formulario antes de enviarlo

  // lo que yo quiero que pase con la información obtenida
  function showData(data){
    console.log('Información del form: ' , data)
  }
  return (
    <>
        <h2>Formulario 2: con React hook form</h2>
        <h3>Forma eficiente y moderna</h3>
        <br />
        <form onSubmit={handleSubmit(showData)}>
          {/* ... -> operador de propagación, y me trae todo lo asociado al método */}
          <input type="text" placeholder='Ingrese usuario' {...register("usuario")}/>
          <br />
          <input type="number" placeholder='Ingrese su número' {...register("numero")}/>
          <br />
          <input type="email" placeholder='Ingrese su correo' {...register("correo")}/>
          <br />
          <br />
          <button type='submit'>Registrarse</button>

        </form>

        <br />
        <hr />
    </>
  )
}
