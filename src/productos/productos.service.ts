import { ProductosDto } from './dto/productos.dto';
import { Injectable } from '@nestjs/common';
import { Producto } from './interface/productos.interface';
import { productosData } from '../db/productos.db';


@Injectable()
export class ProductosService {

    productos: Producto[] = productosData;

    getProductos(): Producto[] {
        return this.productos;
    }

    getProducto(id: number): Producto {
        return this.productos.find((producto) => producto.id === id);
    }

    addProducto(producto: ProductosDto) {
        this.productos.push({...producto, id: this.productos.length + 1});
        return producto;
    }

    updateProducto(id: number, producto: Producto): Producto {
        const index = this.productos.findIndex((producto) => producto.id === id);
        this.productos[index] = producto;
        return producto;
    }

    deleteProducto(id: number): Producto {
        const index = this.productos.findIndex((producto) => producto.id === id);
        const producto = this.productos[index];
        this.productos.splice(index, 1);
        return producto;
    }

}
