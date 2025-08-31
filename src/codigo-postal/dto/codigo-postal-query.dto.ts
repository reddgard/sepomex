import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CodigoPostalQueryDto {
  @ApiProperty({ description: 'Id por el que se puede filtrar' })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(2)
  codigoEstado?: string;
}
