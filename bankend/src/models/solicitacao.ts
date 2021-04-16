import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("solicitacao")
class Solicitacao {
    
    @PrimaryGeneratedColumn()
    cd_solicitacao: number;
    
    @Column()
    ds_titulo: String;

    @Column()
    ds_solicitacao: String;

    @Column()
    id_tipo: String;

    @CreateDateColumn()
    dt_previsao: Date;

    @Column()
    cd_responsavel: number;

    @Column()
    cd_usuario: number;

    @Column()
    cd_tarefa: number;
}

export { Solicitacao };
