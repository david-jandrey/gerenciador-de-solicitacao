import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTarefaItem1618450771897 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tarefa_item",
                columns: [
                    {
                        name: "cd_tarefa_item",
                        type: "integer",
                        isPrimary: true,
                        isGenerated : true 
                    },
                    {
                        name: "ds_interacao",
                        type: "text"
                    },
                    {
                        name: "cd_tarefa",
                        type: "integer"
                    },
                    {
                        name: "dt_interacao",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                      name: "FkTarefa",
                      referencedTableName: "tarefa",
                      referencedColumnNames: ["cd_tarefa"],
                      columnNames: ["cd_tarefa"],
                      onDelete: "CASCADE",
                      onUpdate:  "CASCADE"
                    }                   
                ]
            } )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tarefa_item")
    }

}