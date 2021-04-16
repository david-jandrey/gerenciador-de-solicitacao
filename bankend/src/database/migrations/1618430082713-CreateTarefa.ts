import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTarefa1618430082713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tarefa",
                columns:[
                    {
                        name: "cd_tarefa",
                        type:"integer",
                        isPrimary: true,
                        isGenerated: true

                    },
                    {
                        name: "ds_titulo",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "ds_tarefa",
                        type: "text"
                    },
                    {
                        name: "id_situacao",
                        type: "char",
                        length: "2",
                        default: "'AB'"

                    },
                    {
                        name: "dt_inicio",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "dt_fim",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "cd_cliente",
                        type: "integer"
                    },
                    {
                        name: "cd_usuario",
                        type: "integer"
                    }
                ],
                foreignKeys: [
                    {
                      name: "FkCliente",
                      referencedTableName: "cliente",
                      referencedColumnNames: ["cd_cliente"],
                      columnNames: ["cd_cliente"],
                      onDelete: "CASCADE",
                      onUpdate:  "CASCADE"
                    },
                    {
                        name: "FkUsuario",
                        referencedTableName: "usuario",
                        referencedColumnNames: ["cd_usuario"],
                        columnNames: ["cd_usuario"],
                        onDelete: "CASCADE",
                        onUpdate:  "CASCADE"
                      }                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tarefa");
    }

}
