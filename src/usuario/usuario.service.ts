import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultadoDto} from '../dto/resultado.dto';
import { Usuario } from './usuario.entity';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto>{
    let usuario= new Usuario()
    usuario.email=data.email
    usuario.nome=data.nome
    usuario.password=data.senha
    return this.usuarioRepository.save(usuario)
    .then((result) =>{
      return<ResultadoDto>{
        status: true,
        mensagem: "usuário cadastrado com sucesso"
      }
    })
    .catch((error) =>{
      return<ResultadoDto>{
        status: false,
        mensagem: "Houve um erro ao cadastrar o usuário"
      }
  
    })
    
  }
}