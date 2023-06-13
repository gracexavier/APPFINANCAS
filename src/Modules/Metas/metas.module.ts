import { Module } from '@nestjs/common';
import { MetasController } from './controllers';
import { MetasService} from './service';
import { Metas } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Metas])],
  controllers: [MetasController],
  providers: [MetasService],
  exports: [TypeOrmModule]
})
export class metasModule {}
