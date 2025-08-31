import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sepomex } from 'src/db/entities/sepomex.entity';
import { Repository } from 'typeorm';
import { CodigoPostalQueryDto } from './dto/codigo-postal-query.dto';

@Injectable()
export class CodigoPostalService {
  constructor(
    @InjectRepository(Sepomex)
    private repo: Repository<Sepomex>,
  ) {}

  async findByCP(cp: string, codigoPostalQuery: CodigoPostalQueryDto) {
    const where: Partial<Sepomex> = { d_codigo: cp };
    if (codigoPostalQuery.codigoEstado) {
      where.c_estado = codigoPostalQuery.codigoEstado;
    }
    const cps = await this.repo.find({ where });
    if (cps.length === 0) {
      throw new NotFoundException('Código postal no encontrado');
    }
    return cps;
  }
}
