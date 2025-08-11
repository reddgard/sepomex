import { Controller, Get, Param } from '@nestjs/common';
import { CodigoPostalService } from './codigo-postal.service';

@Controller('codigo-postal')
export class CodigoPostalController {
  constructor(private readonly codigoPostalService: CodigoPostalService) {}

  @Get(':cp')
  getByCP(@Param('cp') cp: string) {
    return this.codigoPostalService.findByCP(cp);
  }
}
