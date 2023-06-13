import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UsuarioService} from '../service/';

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  findAll():Promise<IUsuario[]> {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  
  findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.findOne(id);

  }

  @Post()
  createUsuario(@Body() usuario: IUsuario): IUsuario[]{
    return this.usuarioService.createUsuario(usuario)
  }

  @Put(':nome')
  cupdateUsuario(@Body() usuario: IUsuario, @Param('nome') nome:string): IUsuario[]{
    return this.usuarioService.updateUsuario(nome, usuario)
  }

  @Delete(':nome')
  delete(@Param('nome') nome: string): IUsuario[] {
    return this.usuarioService.delete(nome);
  }
}
