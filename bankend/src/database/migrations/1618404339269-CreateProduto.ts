import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduto1618404339269 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produto",
                columns: [
                    {
                        name: "cd_produto",
                        type: "integer",
                        isPrimary: true,
                        isGenerated : true 

                    },
                    {
                        name: "ds_produto",
                        type: "varchar",
                        length: "100"
                    },
                    {
                        name: "dt_cadastro",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produto");
    }

}
