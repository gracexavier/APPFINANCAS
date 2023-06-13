import { Injectable, Param } from '@nestjs/common';
import { entradaSaida} from '../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EntradaSaidaService {
  private entradaSaida:IentradaSaida[] = []

  constructor(
    @InjectRepository(entradaSaida)
    private entradaSaidaRepository: Repository<entradaSaida>,
  ) {}


  async findAll(){
    return await this.entradaSaidaRepository.find()
  }

  async findOne(id: number){
    return await this.entradaSaidaRepository.findOne({
      where : {
        id: id
      }
    })

  }

  async createUsuario(entradaSaida:IentradaSaida): Promise<IentradaSaida>{
    return await this.entradaSaidaRepository.save(entradaSaida)
  }

  async updateUsuario(id: number, entradaSaida:IentradaSaida){
   
    return await this.entradaSaidaRepository.update({id:id}, entradaSaida)
  }

  async delete(id: number){
   return await this.entradaSaidaRepository.delete({id:id})
  }
}
