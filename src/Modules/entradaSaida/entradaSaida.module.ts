import { Module } from '@nestjs/common';
import { EntradaSaidaController } from './controllers';
import { EntradaSaidaService} from './service';
import { entradaSaida } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([entradaSaida])],
  controllers: [EntradaSaidaController],
  providers: [EntradaSaidaService],
  exports: [TypeOrmModule]
})
export class entradaSaidaModule {}
