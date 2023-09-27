import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { ICategoriaRepository } from "@modules/catalogo/domain/categoria/categoria.repository.interface";
import { CategoriaMap } from "@modules/catalogo/mappers/categoria.map";
import { PrismaRepository } from "@shared/infra/database/prisma.repository";

class CategoriaPrismaRepository extends PrismaRepository implements ICategoriaRepository<Categoria> {
    
    async recuperarPorUuid(uuid: string): Promise<Categoria | null> {
        const categoriarecuperada = await this._datasource.categoria.findUnique(
            {
                where: {
                    id: uuid
                }
            }
        )
        if (categoriarecuperada) {
            return CategoriaMap.toDomain({
                id: categoriarecuperada.id,
                nome: categoriarecuperada.nome
            })
        }
        return null;
    }

    async recuperarTodos(): Promise<Array<Categoria>> {
       const categoriasRecuperadas = await this._datasource.categoria.findMany();
       const categorias = categoriasRecuperadas.map(
        (categoria) => CategoriaMap.toDomain(
            {
                id: categoria.id,
                nome: categoria.nome
            }
        )
       )
       return categorias;
    }

    async existe(uuid: string): Promise<boolean> {
        const categpriaExistente = await this.recuperarPorUuid(uuid);
        if (categpriaExistente) {return true;}
        return false;
    }

    async inserir(categoria: Categoria): Promise<Categoria> {
        const categoriaInserida = await this._datasource.categoria.create(
            {
                data: {
                    id: categoria.id,
                    nome: categoria.nome
                }
            }
        );
        return categoria;
    }

    async atualizar(uuid: string, categoria: Categoria): Promise<boolean> {
        const categoriaAtualizada = await this._datasource.categoria.update(
            {
                where: {id: uuid},
                data: CategoriaMap.toDTO(categoria)
            }
        );
        if (categoriaAtualizada) {return true};
        return false;
    }

    async deletar(uuid: string): Promise<boolean> {
        const categoriaDeletada = await this._datasource.categoria.delete(
            {
                where: {
                    id: uuid
                }
            }
        );
        if(categoriaDeletada.id) {return true;}
        return false;
    }



}

export { CategoriaPrismaRepository }