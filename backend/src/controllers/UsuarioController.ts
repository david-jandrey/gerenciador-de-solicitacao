import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsuarioRepository } from "../repositories/usuarioRepository";

class UsuarioController {
    async create(request: Request, response: Response ){
        const {nm_usuario, telefone,senha, id_tipo_usuario} = request.body;
        const usuarioRepository = getCustomRepository(UsuarioRepository)

        const usuario_existente =await usuarioRepository.findOne({
            nm_usuario
        });

        if (usuario_existente){
            return response.status(400).json({
                error: "Usuário já existe"
            });
        }

        const usuario =usuarioRepository.create({
            nm_usuario,
            telefone,
            senha,
            id_tipo_usuario,
        });

        await usuarioRepository.save(usuario)        

        return response.json(usuario.cd_usuario)
    }
}

export { UsuarioController };
