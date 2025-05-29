// lógica de el componente Página de productos - mostrar productos
import { useState, useEffect } from "react"
import { getAllProducts } from "../services/productService.js"

export function useProducts() {
    const [products, setProducts] = useState([]);

    // hágame la peticiòn - asincronica - guarde la respuesta en la variable de estado
   async function fetchProducts() {
        // manejo de errores
        try {
            const data = await getAllProducts();
            setProducts(data)
        }catch (e){
            console.error('Error inesperado', e)
        }
    }

    //Cuando se carge por primera vez el componente, active la función para hacer la petición 
    useEffect(()=>{
        fetchProducts();
    }, [])

    return { //los hooks pueden o no retornar
        products,
        //... el resto de variable sy métodos
    }
}