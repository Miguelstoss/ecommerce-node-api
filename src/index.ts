import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { StatusProduto } from '@modules/catalogo/domain/produto/produto.types';
import { CategoriaPrismaRepository } from "@modules/catalogo/infra/database/categoria.prisma.repository";
import { ProdutoPrismaRepository } from "@modules/catalogo/infra/database/produto.prisma.repository";
import { DomainException } from "@shared/domain/domain.exception";
import { prisma } from "@main/infra/database/orm/prisma/client";
import { categoriaRepositorio as categoriaRepo } from "@modules/catalogo/infra/database";
import { produtoRepositorio as produtoRepo } from "@modules/catalogo/infra/database";
import { atualizarCategoriaUsecase, deletarCategoriaUseCase, inserirCategoriaUseCase, recuperarCategoriaPorIdUseCase, recuperarProdutoPorIdUseCase, recuperarTodasCategoriasUseCase } from "@modules/catalogo/application/use-case";


async function main() {

    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );
 
    ////////////////////////////////
    //Recuperar Categoria por UUID//
    ////////////////////////////////
   
    //console.log(await recuperarCategoriaPorIdUseCase.execute("8886a1e0-2940-42ec-8ab3-1a4688bbd50e"));

    /////////////////////////////////
    //Recuperar Todas as Categorias//
    /////////////////////////////////

    //console.log(await recuperarTodasCategoriasUseCase.execute());

    /////////////////////
    //Inserir Categoria//
    /////////////////////

    //console.log(await inserirCategoriaUseCase.execute({nome:'Banho'}));

    ///////////////////////
    //Atualizar Categoria//
    ///////////////////////

    //console.log (await atualizarCategoriaUsecase.execute({
    //    id: 'f2f20af9-e046-4347-84f1-f8e41a327695',
    //    nome: 'Cama Casal'
    //}));

    /////////////////////
    //Deletar Categoria//
    /////////////////////

    //console.log(await deletarCategoriaUseCase.execute('a38424da-07ae-4c75-856e-073e20d71da8'));

    //////////////////////////////
    //Recuperar Produto Por UUID//
    //////////////////////////////

    //console.log(await recuperarProdutoPorIdUseCase.execute('94b646a0-0af1-43d2-a4a5-4b907bf2d2bd'));

    /////////////////////
    ///Inserir Produto///
    /////////////////////

    /*const categoria01: Categoria = Categoria.recuperar({
        id: "3154c9eb-35f0-452f-a94b-87fe429281ce",
        nome: 'Cama'
    });    

    const categoria02: Categoria = Categoria.recuperar({
        id: "8886a1e0-2940-42ec-8ab3-1a4688bbd50e",
        nome: 'Mesa'
    });

    const produto: Produto = Produto.criar({
        nome:'Lençol',
        descricao:'lençol de algodão',
        valor:40,
        categorias:[categoria01,categoria02]
        });

    const produtoInserido = await produtoRepo.inserir(produto);

    console.log(produtoInserido);*/

    /////////////////////////////////
    ///Recuperar Todos as Produtos///
    /////////////////////////////////

    //const produtosRecuperados: Array<Produto> = await produtoRepo.recuperarTodos();

    //console.log(produtosRecuperados);

    /////////////////////
    //Atualizar Produto//
    /////////////////////

    /*const categoria01: Categoria = Categoria.recuperar({
        id: "3154c9eb-35f0-452f-a94b-87fe429281ce",
        nome: 'Mesa'
    });    

    const categoria02: Categoria = Categoria.recuperar({
        id: "8886a1e0-2940-42ec-8ab3-1a4688bbd50e",
        nome: 'Banho'
    });

    const produto: Produto = Produto.recuperar({
        id: "94b646a0-0af1-43d2-a4a5-4b907bf2d2bd",
        nome: "Toalha de Mesa Grande",
        descricao: "Toalha de Algodão",
        valor: 100,
        categorias:[categoria01,categoria02]
    });    

    const atualizouProduto: boolean = await produtoRepo.atualizar(produto.id,produto);

    console.log(atualizouProduto)*/

    /////////////////////
    ///Deletar Produto///
    /////////////////////

    //const produtoDeletado = await produtoRepo.deletar('94b646a0-0af1-43d2-a4a5-4b907bf2d2bd');

    //console.log(produtoDeletado);

    ////////////////////////////////////////////
    //Adicionar e Remover Categoria ao Produto//
    ////////////////////////////////////////////

    //const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("94b646a0-0af1-43d2-a4a5-4b907bf2d2bd");

    //const categoriaRecuperada: Categoria | null = await categoriaRepo.recuperarPorUuid("3154c9eb-35f0-452f-a94b-87fe429281ce");

    //if (produtoRecuperado && categoriaRecuperada){

        //if (produtoRecuperado.adicionarCategoria(categoriaRecuperada)) {
        //    await produtoRepo.adicionarCategoria(produtoRecuperado,categoriaRecuperada);
        //}

        //if (produtoRecuperado.removerCategoria(categoriaRecuperada)) {
        //    await produtoRepo.removerCategoria(produtoRecuperado,categoriaRecuperada);
        //}

    //}

    //////////////////////////
    //Alterar Status Produto//
    //////////////////////////

    //const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("94b646a0-0af1-43d2-a4a5-4b907bf2d2bd");

    //if (produtoRecuperado) {
    //    const alterouStatusProduto: boolean = await produtoRepo.alterarStatus(produtoRecuperado,StatusProduto.ATIVO)
    //    console.log(alterouStatusProduto);
    //}

    ////////////////////////////////////
    //Recuperar Produtos por Categoria//
    ////////////////////////////////////
            
    //const todosProdutosPorCategoria: Array<Produto> = await produtoRepo.recuperarPorCategoria("3154c9eb-35f0-452f-a94b-87fe429281ce");

    //console.log(todosProdutosPorCategoria);

}

main()
    .then(async () => {
    await prisma.$disconnect()
    })
    .catch(async (error) => {
        if (error instanceof DomainException) {
            console.log('Exceção de Domínio');
            console.log(error.message);
        }
        else {
            console.log('Outras Exceções');
            console.log(error.message);
        }
        await prisma.$disconnect()
        process.exit(1)
    })