import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("usuario")
class Usuario {
    
    @PrimaryGeneratedColumn('increment')
    cd_usuario: number;
    
    @Column()
    nm_usuario: String;

    @Column()
    telefone: String;

    @Column()
    senha: String;

    @Column()
    id_tipo_usuario: String;

    @CreateDateColumn()
    dt_cadastro: Date;

}

export { Usuario };
