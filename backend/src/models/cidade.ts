import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("cidade")
class Cidade {
    
    @PrimaryGeneratedColumn()
    cd_cidade: number;
    
    @Column()
    ds_cidade: String;

    @Column()
    sigla_estado: String;

    @CreateDateColumn()
    dt_cadastro: Date;

}

export { Cidade };
