import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { Solicitacao_itemRepository } from "../repositories/Solicitacao_itemRepository";


class Solicitacao_itemController {
    async create(request: Request, response: Response){
    const  { ds_interacao, cd_solicitacao } = request.body;
    const solicitacao_itemRepository = getCustomRepository(Solicitacao_itemRepository)
    
    const solicitacao_item = solicitacao_itemRepository.create({
        ds_interacao,
        cd_solicitacao
    });

    await  solicitacao_itemRepository.save(solicitacao_item)

    return response.status(200).json(solicitacao_item.cd_solicitacao_item)

    }
}

export { Solicitacao_itemController };

