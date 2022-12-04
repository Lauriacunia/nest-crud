import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './interface/productos.interface';
import { ProductosDto } from './dto/productos.dto';

/**Nest trabaja con decoradores
 * @Controller() es un decorador que se usa para definir un controlador
 * @Get() es un decorador que se usa para definir una ruta GET
 * @Post() es un decorador que se usa para definir una ruta POST
 * @Body() es un decorador que se usa para definir req.body
 * @Param() es un decorador que se usa para definir req.params
 */
@Controller('productos') // define el slash de la ruta raiz '/productos'
export class ProductosController {

    constructor (private readonly ProductosService: ProductosService) {}

    @Get()
    getProductos(): Producto[] {
        return this.ProductosService.getProductos();
    }

    @Get(':id')
    getProducto(@Param() params) {
        return this.ProductosService.getProducto(params.id);
    }

    @Post()
    addProducto(@Body() producto) {
        return this.ProductosService.addProducto(producto);
    }

}
