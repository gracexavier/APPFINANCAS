import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { MetasService} from '../service';

@Controller('metas')
export class MetasController {
  constructor(private readonly metasService:  MetasService) {}

  @Get()
  findAll(){
    return this.metasService.findAll();
  }

  @Get(':id')
  
  findOne(@Param('id') id: number){
    return this.metasService.findOne(id);

  }

  @Post()
  createUsuario(@Body() meta: IMetas){
    return this.metasService.createUsuario(meta)
  }

  @Put(':id')
  updateUsuario(@Body() meta: IMetas, @Param('id') id:number){
    return this.metasService.updateUsuario(id, meta)
  }

  @Delete(':id')
  delete(@Param('id') id: number){
    return this.metasService.delete(id);
  }
}
