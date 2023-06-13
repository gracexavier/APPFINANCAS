import { Module } from '@nestjs/common';
import { UsuarioModule } from './Modules/usuario/usuario.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Usuario } from './Modules/usuario/entities';
import { Metas } from './Modules/Metas/entities';
import { entradaSaida } from './Modules/entradaSaida/entities';
import { entradaSaidaModule } from './Modules/entradaSaida/entradaSaida.module';
import { metasModule } from './Modules/Metas/metas.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '123456',
    database: 'appfinancas',
    entities: [Usuario,Metas,entradaSaida],
    synchronize: true,
  }),
    
  UsuarioModule,
  entradaSaidaModule,
  metasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
