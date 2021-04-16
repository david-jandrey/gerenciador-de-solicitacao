import { EntityRepository, Repository } from "typeorm";
import { Solicitacao } from "../models/solicitacao";

@EntityRepository(Solicitacao)
class SolicitacaoRepository extends Repository<Solicitacao> {}

export { SolicitacaoRepository };
