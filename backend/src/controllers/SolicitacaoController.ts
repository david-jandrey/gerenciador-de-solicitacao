import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SolicitacaoRepository } from "../repositories/SolicitacaoRepository";
import { TarefaRepository } from "../repositories/TarefaRepository";

class SolicitacaoController {
    async create(request: Request, response: Response){
    const  { ds_titulo, ds_solicitacao, id_tipo, dt_previsao,  cd_responsavel, cd_usuario, cd_tarefa } = request.body;
    const solicitacaoRepository = getCustomRepository(SolicitacaoRepository)
    
    const solicitacao = solicitacaoRepository.create({
        ds_titulo,
        ds_solicitacao,
        id_tipo,
        dt_previsao,
        cd_responsavel,
        cd_usuario,
        cd_tarefa
    });

    await  solicitacaoRepository.save(solicitacao)

    return response.status(200).json(solicitacao.cd_solicitacao)

    }
}

export { SolicitacaoController };

