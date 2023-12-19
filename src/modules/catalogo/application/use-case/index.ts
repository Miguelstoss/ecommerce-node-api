import { RecuperarCategoriaPorIdUseCase } from "./recuperar-categoria-por-id/recuperar-categoria-por-id.use-case";
import { categoriaRepositorio, produtoRepositorio } from "@modules/catalogo/infra/database";
import { RecuperarTodasCategoriasUseCase } from "./recuperar-todas-categorias/recuperar-todas-categorias.use.case";
import { InserirCategoriaUseCase } from "./inserir-categoria/inserir-categoria.use-case";
import { AtualizarCategoriaUseCase } from "./atualizar-categoria/atualizar-categoria.use-case";
import { DeletarCategoriaUseCase } from "./deletar-categoria/deletar-categoria.use-case";
import { RecuperarprodutoPorIDUseCase } from "./recuperar-produto-por-id/recuperar-produto-por-id.use-case";
import { RecuperarTodosProdutosUseCase } from "./recuperar-todos-produtos/recuperar-todos-produtos.use.case";

const recuperarCategoriaPorIdUseCase = new RecuperarCategoriaPorIdUseCase(categoriaRepositorio);
const recuperarTodasCategoriasUseCase = new RecuperarTodasCategoriasUseCase(categoriaRepositorio);
const inserirCategoriaUseCase = new InserirCategoriaUseCase(categoriaRepositorio);
const atualizarCategoriaUsecase = new AtualizarCategoriaUseCase(categoriaRepositorio);
const deletarCategoriaUseCase = new DeletarCategoriaUseCase(categoriaRepositorio);


const recuperarTodosProdutosUseCase = new RecuperarTodosProdutosUseCase(produtoRepositorio)
const recuperarProdutoPorIdUseCase = new RecuperarprodutoPorIDUseCase (produtoRepositorio);

export {
    recuperarCategoriaPorIdUseCase, 
    recuperarTodasCategoriasUseCase, 
    inserirCategoriaUseCase,
    atualizarCategoriaUsecase,
    deletarCategoriaUseCase,
    recuperarProdutoPorIdUseCase,
    recuperarTodosProdutosUseCase
}