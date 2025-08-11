import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSepomexTable1754893139713 implements MigrationInterface {
    name = 'CreateSepomexTable1754893139713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sepomex" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "d_codigo" varchar NOT NULL, "d_asenta" varchar NOT NULL, "d_tipo_asenta" varchar NOT NULL, "D_mnpio" varchar NOT NULL, "d_estado" varchar NOT NULL, "d_ciudad" varchar NOT NULL, "d_CP" varchar NOT NULL, "c_estado" varchar NOT NULL, "c_oficina" varchar NOT NULL, "c_CP" varchar, "c_tipo_asenta" varchar NOT NULL, "c_mnpio" varchar NOT NULL, "id_asenta_cpcons" varchar NOT NULL, "d_zona" varchar NOT NULL, "c_cve_ciudad" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sepomex"`);
    }

}
