import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { Tarefa_itemRepository } from "../repositories/Tarefa_itemRepository";

class Tarefa_itemController {
    async create(request: Request, response: Response){
    const  { ds_interacao, cd_tarefa } = request.body;
    const tarefa_itemRepository = getCustomRepository(Tarefa_itemRepository)
    
    const tarefa_item = tarefa_itemRepository.create({
        ds_interacao,
        cd_tarefa
    });

    await  tarefa_itemRepository.save(tarefa_item)

    return response.status(200).json(tarefa_item.cd_tarefa_item)

    }
}

export { Tarefa_itemController };

