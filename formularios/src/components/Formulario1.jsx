import { useState } from "react"

export function Formulario1 () {
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");

    function handleSubmit (event) {
        event.preventDefault();
        alert('El nombre es: ' + nombre + ' La contraseña es: ' + contrasena);
    }

    return (
        <>
            <h2>Formulario 1: con useState</h2>
            <hr />
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Ingrese su usuario</label>
                {/* event.target.value -> es el evento que se genera al escribir en un input*/}
                <input type="text" id="name" value={nombre} onChange={(event)=>{setNombre(event.target.value)}}/>
                <br />
                <label htmlFor="password">Ingrese su contraseña</label>
                <input type="password" id="password" value={contrasena} onChange={(event)=>{setContrasena(event.target.value)}}/>

                <br />
                <br />
                <button type="submit">Ingresar</button>
            </form>

            <br />
            <hr />
        </>
    )
}