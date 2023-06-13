import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/';
import { UsuarioService } from './service/';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [TypeOrmModule]
})
export class UsuarioModule {}
