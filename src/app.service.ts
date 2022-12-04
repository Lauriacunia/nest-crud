import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola! Bienvenido a mi primer proyecto con NestJS';
  }
}
