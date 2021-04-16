import { EntityRepository, Repository } from "typeorm";
import { Cidade } from "../models/cidade";

@EntityRepository(Cidade)
class CidadeRepository extends Repository<Cidade> {}

export { CidadeRepository };
