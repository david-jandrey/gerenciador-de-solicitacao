import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("solicitacao_item")
class Solicitacao_item {
    
    @PrimaryGeneratedColumn()
    cd_solicitacao_item: number;
    
    @Column()
    ds_interacao: String;

    @Column()
    cd_solicitacao: number;

    @CreateDateColumn()
    dt_interacao: Date;
}

export { Solicitacao_item };
