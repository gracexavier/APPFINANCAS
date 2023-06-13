import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class entradaSaida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column()
  data: Date;

  @Column()
  descricao: string;
}
