import { EntityRepository, Repository } from "typeorm";
import { Cliente } from "../models/cliente";


@EntityRepository(Cliente)
class ClienteRepository extends Repository<Cliente> {}

export {ClienteRepository};