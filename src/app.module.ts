import { Module } from '@nestjs/common';
import { UsuarioController } from './Modules/usuario/controllers/usuario.controller';
import { UsuarioService } from './Modules/usuario/service/usuario.service';
import { UsuarioModule } from './Modules/usuario/usuario.module';


@Module({
  imports: [UsuarioModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class AppModule {}
