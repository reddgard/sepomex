import { Controller, Get, Param, Query } from '@nestjs/common';
import { CodigoPostalService } from './codigo-postal.service';
import { CodigoPostalQueryDto } from './dto/codigo-postal-query.dto';

@Controller('codigo-postal')
export class CodigoPostalController {
  constructor(private readonly codigoPostalService: CodigoPostalService) {}

  @Get(':cp')
  getByCP(
    @Param('cp') cp: string,
    @Query() codigoPostalQuery: CodigoPostalQueryDto,
  ) {
    return this.codigoPostalService.findByCP(cp, codigoPostalQuery);
  }
}
