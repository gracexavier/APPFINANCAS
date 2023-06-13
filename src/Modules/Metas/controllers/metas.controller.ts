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
  createMeta(@Body() meta: IMetas){
    return this.metasService.createMeta(meta)
  }

  @Put(':id')
  updateMeta(@Body() meta: IMetas, @Param('id') id:number){
    return this.metasService.updateMeta(id, meta)
  }

  @Delete(':id')
  delete(@Param('id') id: number){
    return this.metasService.delete(id);
  }
}
