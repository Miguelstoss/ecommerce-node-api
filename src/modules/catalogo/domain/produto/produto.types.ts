//Todos os atributos/propriedades que um produto deve ter no sistema

import { Categoria } from "../categoria/categoria.entity";

//Auxilia na criação de invariantes e modelos ricos
interface IProduto{
    id?: string;
    nome: string;
    descricao: string;
    valor: number;
    categorias: Array<Categoria>
}

//Atributos que são necessários para criar um produto
//Tipo representa um dos estados do ciclo de vida da entidade
//Garantir a integriade dos dados de um objeto
type CriarProdutoProps = Omit<IProduto, "id">;

//Atributos que são necessários para recuperar um produto
//Tipo representa um dos estados do ciclo de vida da entidade
type RecuperarProdutoProps = Required<IProduto>;

export {
    CriarProdutoProps, IProduto, RecuperarProdutoProps
};
