import { EntityRepository, Repository } from "typeorm";
import { Usuario } from "../models/usuario";

@EntityRepository(Usuario)
class UsuarioRepository extends Repository<Usuario> {}

export {UsuarioRepository};