import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { EntradaSaidaService} from '../service';

@Controller()
export class EntradaSaidaController {
  constructor(private readonly entradaSaidaService: EntradaSaidaService) {}

  @Get()
  findAll(){
    return this.entradaSaidaService.findAll();
  }

  @Get(':id')
  
  findOne(@Param('id') id: number){
    return this.entradaSaidaService.findOne(id);

  }

  @Post()
  createUsuario(@Body() es: IentradaSaida){
    return this.entradaSaidaService.createUsuario(es)
  }

  @Put(':id')
  updateUsuario(@Body() es: IentradaSaida, @Param('id') id:number){
    return this.entradaSaidaService.updateUsuario(id, es)
  }

  @Delete(':id')
  delete(@Param('id') id: number){
    return this.entradaSaidaService.delete(id);
  }
}
