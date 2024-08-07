import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBetTables1723036520943 implements MigrationInterface {
    name = 'CreateBetTables1723036520943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "outcome" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "odds" numeric(5,2) NOT NULL, "eventId" integer NOT NULL, CONSTRAINT "PK_d721e56b4240f79aaa14cb54775" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sport" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c67275331afac347120a1032825" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "startTime" TIMESTAMP NOT NULL, "sportId" integer NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bet" ("id" SERIAL NOT NULL, "amount" numeric(10,2) NOT NULL, "placedAt" TIMESTAMP NOT NULL, "userId" integer, "eventId" integer, "outcomeId" integer, CONSTRAINT "PK_4ceea2cdef435807614b8e17aed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "outcome" ADD CONSTRAINT "FK_cf6fd7a7f70b5510e2781405f93" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_14126dc54792504366f3db67c28" FOREIGN KEY ("sportId") REFERENCES "sport"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bet" ADD CONSTRAINT "FK_23a1f21c2ca2a0b6797564d2b41" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bet" ADD CONSTRAINT "FK_272e3b35766dc0b7a47cdd12ecf" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bet" ADD CONSTRAINT "FK_8a648d3a056255f8f262a1378f3" FOREIGN KEY ("outcomeId") REFERENCES "outcome"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bet" DROP CONSTRAINT "FK_8a648d3a056255f8f262a1378f3"`);
        await queryRunner.query(`ALTER TABLE "bet" DROP CONSTRAINT "FK_272e3b35766dc0b7a47cdd12ecf"`);
        await queryRunner.query(`ALTER TABLE "bet" DROP CONSTRAINT "FK_23a1f21c2ca2a0b6797564d2b41"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_14126dc54792504366f3db67c28"`);
        await queryRunner.query(`ALTER TABLE "outcome" DROP CONSTRAINT "FK_cf6fd7a7f70b5510e2781405f93"`);
        await queryRunner.query(`DROP TABLE "bet"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "sport"`);
        await queryRunner.query(`DROP TABLE "outcome"`);
    }

}
