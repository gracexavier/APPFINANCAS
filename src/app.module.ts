import { Module } from '@nestjs/common';
import { UsuarioModule } from './Modules/usuario/usuario.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Usuario } from './Modules/usuario/entities';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '123456',
    database: 'appfinancas',
    entities: [Usuario],
    synchronize: true,
  }),
    
    UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
