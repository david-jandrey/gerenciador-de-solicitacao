import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("produto")
class Produto {
    
    @PrimaryGeneratedColumn()
    cd_produto: number;
    
    @Column()
    ds_produto: String;

    @CreateDateColumn()
    dt_cadastro: Date;

}

export { Produto };
