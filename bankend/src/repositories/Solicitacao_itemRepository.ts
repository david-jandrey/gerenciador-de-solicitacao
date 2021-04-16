import { EntityRepository, Repository } from "typeorm";
import { Solicitacao_item } from "../models/solicitacao_tem";

@EntityRepository(Solicitacao_item)
class Solicitacao_itemRepository extends Repository<Solicitacao_item> {}

export { Solicitacao_itemRepository };
