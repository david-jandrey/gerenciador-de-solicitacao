import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1618020250071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuario",
                columns: [
                    {
                        name: "cd_usuario",
                        type: "integer",
                        isPrimary: true,
                        isGenerated : true 

                    },
                    {
                        name: "nm_usuario",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        length: "18",
                        isNullable: true
                    },
                    {
                        name: "senha",
                        type: "varchar",
                        length: "5"
                    },
                    {
                        name: "id_tipo_usuario",
                        type: "char",
                        length: "1"
                    },
                    {
                        name: "dt_cadastro",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            } )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuario");
    }

}
