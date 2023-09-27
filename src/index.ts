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


    //const categoriaRecuperada = await categoriaRepo.recuperarPorUuid("8886a1e0-2940-42ec-8ab3-1a4688bbd50e");

   // console.log(categoriaRecuperada);

   //const categoria: Categoria = Categoria.criar({
   // nome: 'cama'
   //})

   //const categoriaInserida = await categoriaRepo.inserir(categoria);

   //console.log(categoriaInserida);

   //const categorias = await categoriaRepo.recuperarTodos();

   //console.log(categorias);

   //const categoria = Categoria.recuperar({
   // id:"c28e388a-4e0a-4117-8f93-84ec3a1d86d5",
   // nome: 'cama casal' 
   //})

   //const categoriaAtualizada = await categoriaRepo.atualizar(categoria.id, categoria);

   //console.log(categoriaAtualizada);

   const categoriaDeletada = await categoriaRepo.deletar('c28e388a-4e0a-4117-8f93-84ec3a1d86d5');

   console.log(categoriaDeletada);

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