import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sepomex } from 'src/db/entities/sepomex.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CodigoPostalService {
  constructor(
    @InjectRepository(Sepomex)
    private repo: Repository<Sepomex>,
  ) {}

  findByCP(cp: string) {
    return this.repo.find({ where: { d_codigo: cp } });
  }
}
