import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ProdutoRepository } from "../repositories/ProdutoRepository";

class ProdutoController {
    async create(request: Request, response: Response){
    const  { ds_produto } = request.body;
    const produtoRepository = getCustomRepository(ProdutoRepository)

    const produto_existente = await produtoRepository.findOne({
        ds_produto
    })

    if (produto_existente) {
        return response.status(400).json({
            error: "Produto já existe"
        })
    }
    const produto = produtoRepository.create({
        ds_produto
    });

    await  produtoRepository.save(produto)

    return response.status(200).json(produto.cd_produto)

    }
}

export { ProdutoController };
