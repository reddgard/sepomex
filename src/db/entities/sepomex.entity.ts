import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('sepomex')
export class Sepomex {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  d_codigo: string;

  @Column()
  d_asenta: string;

  @Column()
  d_tipo_asenta: string;

  @Column()
  D_mnpio: string;

  @Column()
  d_estado: string;

  @Column()
  d_ciudad: string;

  @Column()
  @Index({ unique: true })
  d_CP: string;

  @Column()
  c_estado: string;

  @Column()
  c_oficina: string;

  @Column({ nullable: true })
  c_CP: string;

  @Column()
  c_tipo_asenta: string;

  @Column()
  c_mnpio: string;

  @Column()
  id_asenta_cpcons: string;

  @Column()
  d_zona: string;

  @Column()
  c_cve_ciudad: string;
}
