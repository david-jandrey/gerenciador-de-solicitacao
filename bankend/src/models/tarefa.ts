import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("tarefa")
class Tarefa {
    
    @PrimaryGeneratedColumn()
    cd_tarefa: number;
    
    @Column()
    ds_titulo: String;

    @Column()
    ds_tarefa: String;

    @Column()
    id_situacao: String;

    @CreateDateColumn()
    dt_inicio: Date;

    @CreateDateColumn()
    dt_fim: Date;

    @Column()
    cd_cliente: number;

    @Column()
    cd_usuario: number;

}

export { Tarefa };
