/*
    1. Crear el contexto -> una cajita -> asignar qué es lo que voy a estar trabajando
    2. Crearnos proveedor de contexto -> definimos la información que se va a compartir (variables o funciones)
    3. Definir cómo usar ese proveedor  -> hook (opcional)
*/

import { createContext, useContext, useState, useEffect } from "react";
import { users } from "../utils/mockUsers.js";


// 1. Crear el contexto
const UserContext = createContext();

// 2. Creamos el proveedor -> children se va a indicar los componentes que usarán el contexto
export const UserProvider = ({children}) => {
    // variables y funciones que se van a acceder desde nuestros componentes
    const [user, setUser] = useState(null);

    function login({parametro1, parametro2}){
        //find me encuentra el usuario y lo guarda en la variable
        const userFound = users.find((user)=> user.username === parametro1 && user.password === parametro2 )
        //si existe usuario en registro
        if(userFound){
            // localStorage solo guarda texto
            localStorage.setItem('userLogged', JSON.stringify(userFound));
            setUser(userFound);
            return true;
        } else {
            return false;
        }
    }

    function logout(){
        localStorage.removeItem('userLogged');
        setUser(null)
        alert('Cierre de sesión exitoso') //por defecto js
    }

    // Para poder mantener la sesión abierta
    useEffect(
        ()=>{
            // localStorage me trae texto
            const stored = JSON.parse(localStorage.getItem('userLogged'));
            setUser(stored);

        }, [] //cuando carge por primera vez mi página o componente
    );

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

// 3. Definimos el uso mediante un hook
export function useUser() {
    return useContext(UserContext);
}