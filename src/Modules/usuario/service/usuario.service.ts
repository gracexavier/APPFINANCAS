import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  private usuario:IUsuario[] = [
    {
        "nome": "joao",
        "email": "naotem@naotem.com",
        "password": "123456"
    },
    {
        "nome": "maria",
        "email": "naotem@naotem.com",
        "password": "1234567"
    }
]

  findAll(): IUsuario[] {
    return this.usuario;
  }

  findOne(nome: string): IUsuario {
    return this.usuario.find((usuario)=> usuario.nome == nome);
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
