import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCliente1618362643138 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cliente",
                columns: [
                    {
                        name: "cd_cliente",
                        type: "integer",
                        isPrimary: true,
                        isGenerated : true 

                    },
                    {
                        name: "nm_cliente",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "cgc",
                        type: "varchar",
                        length: "18"
                    },
                    {
                        name: "rg",
                        type: "varchar",
                        length: "20"
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        length: "18",
                        isNullable: true
                    },
                    {
                        name: "celular",
                        type: "varchar",
                        length: "18",
                        isNullable: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "50",
                        isNullable: true
                    },
                    {
                        name: "endereco",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "bairro",
                        type: "varchar",
                        length: "30"
                    },
                    {
                        name: "cep",
                        type: "varchar",
                        length: "20"
                    },
                    {
                        name: "cd_cidade",
                        type: "integer"
                    },
                    {
                        name: "dt_cadastro",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                      name: "FkCidade",
                      referencedTableName: "cidade",
                      referencedColumnNames: ["cd_cidade"],
                      columnNames: ["cd_cidade"],
                      onDelete: "CASCADE",
                      onUpdate:  "CASCADE"
                    }                   
                ]
            } )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cliente");
    }

}