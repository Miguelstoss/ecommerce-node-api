import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { CategoriaPrismaRepository } from "@modules/catalogo/infra/database/categoria.prisma.repository";
import { PrismaClient } from "@prisma/client";
import { DomainException } from "@shared/domain/domain.exception";
import { error } from "console";

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

    //////////////////////
    //Recuperar Por UUID//
    //////////////////////
    
    //const categoriaRecuperada = await categoriaRepo.recuperarPorUuid("3154c9eb-35f0-452f-a94b-87fe429281ce");

    //console.log(categoriaRecuperada);

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