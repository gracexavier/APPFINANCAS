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


  async findAll(): Promise<Usuario[]> {
    return await this.usuariosRepository.find()
  }

  findOne(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOne({
      where : {
        id
      }
    })

  }

  createUsuario(usuario:IUsuario): IUsuario[]{
    this.usuario.push(usuario)
    return this.usuario
  }

  updateUsuario(nome: string, usuario:IUsuario): IUsuario[]{
    /*this.usuario.push(usuario)*/
    const position = this.usuario.findIndex((usuario)=> usuario.nome == nome)
    this.usuario[position] = usuario
    return this.usuario
  }

  delete(nome: string): IUsuario[]{
    /*this.usuario.push(usuario)*/
    const position = this.usuario.findIndex((usuario)=> usuario.nome == nome)
    this.usuario.splice(position, 1)
    return this.usuario
  }
}
