import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { TarefaRepository } from "../repositories/TarefaRepository";

class TarefaController {
    async create(request: Request, response: Response){
    const  { ds_titulo, ds_tarefa, cd_cliente, cd_usuario } = request.body;
    const tarefaRepository = getCustomRepository(TarefaRepository)
    
    const tarefa = tarefaRepository.create({
        ds_titulo,
        ds_tarefa,
        cd_cliente,
        cd_usuario
    });

    await  tarefaRepository.save(tarefa)

    return response.status(200).json(tarefa.cd_tarefa)

    }
}

export { TarefaController };

