import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSolicitacao1618533596331 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "solicitacao",
                columns:[
                    {
                        name: "cd_solicitacao",
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
                        name: "ds_solicitacao",
                        type: "text"
                    },
                    {
                        name: "id_tipo",
                        type: "char",
                        length: "1"
                    },
                    {
                        name: "dt_previsao",
                        type: "timestamp"
                    },
                    {
                        name: "cd_responsavel",
                        type: "integer"
                    },
                    {
                        name: "cd_usuario",
                        type: "integer"
                    },
                    {
                        name: "cd_tarefa",
                        type: "integer"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FkResponsavel",
                        referencedTableName: "usuario",
                        referencedColumnNames: ["cd_usuario"],
                        columnNames: ["cd_responsavel"],
                        onDelete: "CASCADE",
                        onUpdate:  "CASCADE"
                    } ,
                    {
                        name: "FkUsuario",
                        referencedTableName: "usuario",
                        referencedColumnNames: ["cd_usuario"],
                        columnNames: ["cd_usuario"],
                        onDelete: "CASCADE",
                        onUpdate:  "CASCADE"
                    },
                    {
                        name: "FkTarefa",
                        referencedTableName: "tarefa",
                        referencedColumnNames: ["cd_tarefa"],
                        columnNames: ["cd_tarefa"],
                        onDelete: "CASCADE",
                        onUpdate:  "CASCADE"
                    }                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("solicitacao")
    }

}