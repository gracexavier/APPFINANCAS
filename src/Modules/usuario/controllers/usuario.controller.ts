import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UsuarioService} from '../service/';

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  findAll(){
    return this.usuarioService.findAll();
  }

  @Get(':id')
  
  findOne(@Param('id') id: number){
    return this.usuarioService.findOne(id);

  }

  @Post()
  createUsuario(@Body() usuario: IUsuario){
    return this.usuarioService.createUsuario(usuario)
  }

  @Put(':id')
  updateUsuario(@Body() usuario: IUsuario, @Param('id') id:number){
    return this.usuarioService.updateUsuario(id, usuario)
  }

  @Delete(':id')
  delete(@Param('id') id: number){
    return this.usuarioService.delete(id);
  }
}
