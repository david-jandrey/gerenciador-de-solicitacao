import { EntityRepository, Repository } from "typeorm";
import { Produto } from "../models/produto";

@EntityRepository(Produto)

class ProdutoRepository extends Repository<Produto> {}

export {ProdutoRepository};