import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("tarefa_item")
class Tarefa_item {
    
    @PrimaryGeneratedColumn()
    cd_tarefa_item: number;
    
    @Column()
    ds_interacao: String;

    @Column()
    cd_tarefa: number;

    @CreateDateColumn()
    dt_interacao: Date;
}

export { Tarefa_item };
