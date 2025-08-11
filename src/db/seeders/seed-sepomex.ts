import { DataSource } from 'typeorm';
import { Sepomex } from '../entities/sepomex.entity';
import * as fs from 'fs';
import * as readline from 'readline';
import * as path from 'path';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [Sepomex],
});

async function seed() {
  await AppDataSource.initialize();
  const filePath = path.join(__dirname, 'sepomex.txt');
  const fileStream = fs.createReadStream(filePath, { encoding: 'utf8' });
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let isFirstLine = true;
  let counter = 0;

  for await (const line of rl) {
    if (isFirstLine) {
      isFirstLine = false; // saltar encabezado
      continue;
    }

    const cols = line.split('|').map((col) => col.trim());

    if (cols.length < 15) {
      console.warn(`⚠ Línea inválida, se omite: ${line}`);
      continue;
    }

    const registro = AppDataSource.manager.create(Sepomex, {
      d_codigo: cols[0],
      d_asenta: cols[1],
      d_tipo_asenta: cols[2],
      D_mnpio: cols[3],
      d_estado: cols[4],
      d_ciudad: cols[5],
      d_CP: cols[6],
      c_estado: cols[7],
      c_oficina: cols[8],
      c_CP: cols[9],
      c_tipo_asenta: cols[10],
      c_mnpio: cols[11],
      id_asenta_cpcons: cols[12],
      d_zona: cols[13],
      c_cve_ciudad: cols[14],
    });

    await AppDataSource.manager.save(registro);
    counter++;
  }

  console.log(`✅ Seeder completado. Registros insertados: ${counter}`);
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('❌ Error en el seeder:', err);
  process.exit(1);
});
