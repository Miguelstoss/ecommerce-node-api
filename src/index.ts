import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { StatusProduto } from '@modules/catalogo/domain/produto/produto.types';
import { CategoriaPrismaRepository } from "@modules/catalogo/infra/database/categoria.prisma.repository";
import { ProdutoPrismaRepository } from "@modules/catalogo/infra/database/produto.prisma.repository";
import { PrismaClient } from "@prisma/client";
import { DomainException } from "@shared/domain/domain.exception";

const prisma = new PrismaClient({
    log: ['query', 'info'],
    errorFormat: 'pretty'
});

async function main() {

    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );

    const categoriaRepo =  new CategoriaPrismaRepository(prisma);
    const produtoRepo = new ProdutoPrismaRepository(prisma);

    ////////////////////////////////
    //Recuperar Categoria Por UUID//
    ////////////////////////////////

    //const produtoRecuperado = await produtoRepo.recuperarPorUuid("3154c9eb-35f0-452f-a94b-87fe429281ce");

    //console.log(produtoRecuperado);

    /////////////////////////////////
    //Recuperar Todas as Categorias//
    /////////////////////////////////

    //const todasCategorias: Array<Categoria> = await categoriaRepo.recuperarTodos();

    //console.log(todasCategorias);

    ////////////////////////////////
    //Verifica se Existe Categoria//
    ////////////////////////////////

    //const existeCategoria: boolean = await categoriaRepo.existe("3154c9eb-35f0-452f-a94b-87fe429281ce");

    //console.log(existeCategoria);

    /////////////////////
    //Inserir Categoria//
    /////////////////////

    //const categoria: Categoria = Categoria.criar({
    // nome: 'cama'
    //});

    //const categoriaInserida = await categoriaRepo.inserir(categoria);

    //console.log(categoriaInserida);

    ///////////////////////
    //Atualizar Categoria//
    ///////////////////////

    //const categoria = Categoria.recuperar({
    // id:"c28e388a-4e0a-4117-8f93-84ec3a1d86d5",
    // nome: 'cama casal' 
    //})

    //const categoriaAtualizada = await categoriaRepo.atualizar(categoria.id, categoria);

    //console.log(categoriaAtualizada);

    /////////////////////
    //Deletar Categoria//
    /////////////////////

    //const categoriaDeletada = await categoriaRepo.deletar('c28e388a-4e0a-4117-8f93-84ec3a1d86d5');

    //console.log(categoriaDeletada);

    //////////////////////////////
    //Recuperar Produto Por UUID//
    //////////////////////////////

    //const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("3154c9eb-35f0-452f-a94b-87fe429281ce");

    //console.log(produtoRecuperado);

    /////////////////////
    ///Inserir Produto///
    /////////////////////

    /*const categoria01: Categoria = Categoria.recuperar({
        id: "3154c9eb-35f0-452f-a94b-87fe429281ce",
        nome: 'Mesa'
    });    

    const categoria02: Categoria = Categoria.recuperar({
        id: "8886a1e0-2940-42ec-8ab3-1a4688bbd50e",
        nome: 'Banho'
    });

    const produto: Produto = Produto.criar({
        nome:'Toalha de mesa',
        descricao:'toalha de algodão',
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