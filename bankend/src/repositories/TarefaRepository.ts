import { EntityRepository, Repository } from "typeorm";
import { Tarefa } from "../models/tarefa";

@EntityRepository(Tarefa)
class TarefaRepository extends Repository<Tarefa> {}

export { TarefaRepository };
