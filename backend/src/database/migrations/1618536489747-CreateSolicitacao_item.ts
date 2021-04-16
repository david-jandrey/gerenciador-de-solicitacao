import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSolicitacaoItem1618536489747 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "solicitacao_item",
                columns: [
                    {
                        name: "cd_solicitacao_item",
                        type: "integer",
                        isPrimary: true,
                        isGenerated : true 
                    },
                    {
                        name: "ds_interacao",
                        type: "text"
                    },
                    {
                        name: "cd_solicitacao",
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
                      name: "FkSolicitacao",
                      referencedTableName: "solicitacao",
                      referencedColumnNames: ["cd_solicitacao"],
                      columnNames: ["cd_solicitacao"],
                      onDelete: "CASCADE",
                      onUpdate:  "CASCADE"
                    }                   
                ]
            } )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("solicitacao_item")
    }
}