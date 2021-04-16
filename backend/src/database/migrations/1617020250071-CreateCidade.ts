import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCidade1617020250071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cidade",
                columns: [
                    {
                        name: "cd_cidade",
                        type:"integer",
                        isPrimary: true,
                        isGenerated: true

                    },
                    {
                        name: "ds_cidade",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "sigla_estado",
                        type: "char",
                        length: "2"
                    },
                    {
                        name: "dt_cadastro",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cidade");
    }

}
