import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Metas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  valor: number;

  @Column()
  tempo: number;

  @Column()
  descricao: string;
}
