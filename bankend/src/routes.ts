import {Router} from "express";
import { CidadeController } from "./controllers/CidadeController";
import { ClienteController } from "./controllers/ClienteController";
import { ProdutoController } from "./controllers/ProdutoController";
import { SolicitacaoController } from "./controllers/SolicitacaoController";
import { Solicitacao_itemController } from "./controllers/Solicitacao_itemController";
import { TarefaController } from "./controllers/TarefaController";
import { Tarefa_itemController } from "./controllers/Tarefa_itemController";
import { UsuarioController } from "./controllers/UsuarioController";

const router = Router();
const usuarioController     = new UsuarioController();
const clienteController     = new ClienteController();
const produtoController     = new ProdutoController();
const cidadeController      = new CidadeController();
const tarefaController      = new TarefaController();
const tarefa_itemController = new Tarefa_itemController();
const solicitacaoController = new SolicitacaoController();
const solicitacao_itemController = new Solicitacao_itemController();

router.post("/usuario", usuarioController.create);
router.post("/cliente", clienteController.create);
router.post("/produto", produtoController.create);
router.post("/cidade", cidadeController.create);
router.post("/tarefa", tarefaController.create);
router.post("/tarefa_item", tarefa_itemController.create);
router.post("/solicitacao", solicitacaoController.create);
router.post("/solicitacao_item", solicitacao_itemController.create);

export {router}