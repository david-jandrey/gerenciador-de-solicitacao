import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { CidadeRepository } from "../repositories/CidadeRepository";

class CidadeController {
    async create(request: Request, response: Response){
    const  { ds_cidade, sigla_estado } = request.body;
    const cidadeRepository = getCustomRepository(CidadeRepository)

    const cidade_existente = await cidadeRepository.findOne({
        ds_cidade
    })

    if (cidade_existente) {
        return response.status(400).json({
            error: "Cidade já existe"
        })
    }
    const cidade = cidadeRepository.create({
        ds_cidade,
        sigla_estado
    });

    await  cidadeRepository.save(cidade)

    return response.status(200).json(cidade.cd_cidade)

    }
}

export { CidadeController };

