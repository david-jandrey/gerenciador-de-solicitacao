import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("cliente")
class Cliente {
    
    @PrimaryGeneratedColumn()
    cd_cliente: number;
    
    @Column()
    nm_cliente: String;

    @Column()
    cgc: String;

    @Column()
    rg: String;

    @Column()
    telefone: String;

    @Column()
    celular: String;

    @Column()
    email: String;

    @Column()
    endereco: String;

    @Column()
    bairro: String;

    @Column()
    cep: String;

    @Column()
    cd_cidade: Number;

    @CreateDateColumn()
    dt_cadastro: Date;

}

export { Cliente };
