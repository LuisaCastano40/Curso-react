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

    function login(){

    }

    function logout(){

    }

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