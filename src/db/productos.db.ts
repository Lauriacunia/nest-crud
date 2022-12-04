/**Producto es una 'interface'. También lo llaman Types (un tipo compuesto de datos) */
import { Producto } from '../productos/interface/productos.interface';

/** Simulamos respuesta de la DB  */
export const productosData: Producto[] = [
    {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'Descripción del producto 1',
        precio: 100,
        stock: 10
    },
    {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'Descripción del producto 2',
        precio: 200,
        stock: 20
    },
    {
        id: 3,
        nombre: 'Producto 3',
        descripcion: 'Descripción del producto 3',
        precio: 300,
        stock: 30
    },

];