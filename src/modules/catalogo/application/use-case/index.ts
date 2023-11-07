import { RecuperarCategoriaPorIdUseCase } from "./recuperar-categoria-por-id/recuperar-categoria-por-id.use-case";
import { categoriRepositorio } from "@modules/catalogo/infra/database";
import { RecuperarTodasCategoriasUseCase } from "./recuperar-todas-categorias/recuperar-todas-categorias.use.case";

const recuperarCategoriaPorIdUseCase = new RecuperarCategoriaPorIdUseCase(categoriRepositorio);
const recuperarTodasCategoriasUseCase = new RecuperarTodasCategoriasUseCase(categoriRepositorio);

export {
    recuperarCategoriaPorIdUseCase, recuperarTodasCategoriasUseCase
}