import { Module } from '@nestjs/common';
import { CodigoPostalService } from './codigo-postal.service';
import { CodigoPostalController } from './codigo-postal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sepomex } from 'src/db/entities/sepomex.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sepomex])],
  controllers: [CodigoPostalController],
  providers: [CodigoPostalService],
})
export class CodigoPostalModule {}
