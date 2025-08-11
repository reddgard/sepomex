import { DataSource } from 'typeorm';
import { Sepomex } from './entities/sepomex.entity';

export default new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [Sepomex],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});
