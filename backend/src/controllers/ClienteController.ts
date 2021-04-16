import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ClienteRepository } from "../repositories/ClienteRepository";

class ClienteController {
    async create(request: Request, response: Response ){
        const {nm_cliente, cgc, rg, telefone, celular, email, endereco, bairro, cep, cd_cidade } = request.body;
        const clienteRepository = getCustomRepository(ClienteRepository)

        const cliente_existente =await clienteRepository.findOne({
           cgc
        });

        if (cliente_existente){
            return response.status(400).json({
                error: "Cliente já existe"
            });
        }

        const cliente = clienteRepository.create({
            nm_cliente,
            cgc, 
            rg, 
            telefone,
            celular,
            email,
            endereco,
            bairro,
            cep,
            cd_cidade
        });

        await clienteRepository.save(cliente)         

        return response.json(cliente.cd_cliente)
    }
}

export { ClienteController };
