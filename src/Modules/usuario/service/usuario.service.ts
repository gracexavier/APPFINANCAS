import { Injectable, Param } from '@nestjs/common';
import { Usuario } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { identity } from 'rxjs';

@Injectable()
export class UsuarioService {
  private usuario:IUsuario[] = []

  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}


  async findAll(){
    return await this.usuariosRepository.find()
  }

  async findOne(id: number){
    return await this.usuariosRepository.findOne({
      where : {
        id: id
      }
    })

  }

  async createUsuario(usuario:IUsuario){
    return await this.usuariosRepository.save(usuario)
  }

  async updateUsuario(id: number, usuario:IUsuario){
   
    return await this.usuariosRepository.update({id:id}, usuario)
  }

  async delete(id: number){
   return await this.usuariosRepository.delete({id:id})
  }
}
