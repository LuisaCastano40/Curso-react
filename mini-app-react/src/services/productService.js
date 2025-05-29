// gestionar la lógica de conexion con servidor para peticiones de los productos
import axios from "axios";

export async function getAllProducts () {
    const API_URL = 'https://fakestoreapi.com/products'
    // manejo de errores
    try {
        const response = await axios.get(API_URL);
        console.log(response);
        return response.data
    } catch (error) {
        console.error('Ups, no se pudo mostrar la info', error)
    }
}