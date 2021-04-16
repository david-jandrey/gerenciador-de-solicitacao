import { EntityRepository, Repository } from "typeorm";
import { Tarefa_item } from "../models/tarefa_item";

@EntityRepository(Tarefa_item)
class Tarefa_itemRepository extends Repository<Tarefa_item> {}

export { Tarefa_itemRepository };