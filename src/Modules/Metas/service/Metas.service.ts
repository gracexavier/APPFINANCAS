import { Injectable, Param } from '@nestjs/common';
import { Metas} from '../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class MetasService {
  private metas:IMetas[] = []

  constructor(
    @InjectRepository(Metas)
    private metasRepository: Repository<Metas>,
  ) {}


  async findAll(){
    return await this.metasRepository.find()
  }

  async findOne(id: number){
    return await this.metasRepository.findOne({
      where : {
        id: id
      }
    })
  }

  async createUsuario(metas:IMetas): Promise<IMetas>{
    return await this.metasRepository.save(metas)
  }

  async updateUsuario(id: number, metas:IMetas){
   
    return await this.metasRepository.update({id:id}, metas)
  }

  async delete(id: number){
   return await this.metasRepository.delete({id:id})
  }
}
