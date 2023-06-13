import { Module } from '@nestjs/common';
import { UsuarioController } from './Modules/usuario/controllers/usuario.controller';
import { UsuarioService } from './Modules/usuario/service/usuario.service';


@Module({
  imports: [
  

  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class AppModule {}
