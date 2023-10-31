import { PrismaClient } from "@prisma/client";
import { DeepMockProxy, mockDeep, mockReset } from "vitest-mock-extended";
import { ProdutoPrismaRepository } from "./produto.prisma.repository";
import { afterEach, beforeAll, expect, test, vi, describe } from "vitest";
import { faker } from "@faker-js/faker";
import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { ProdutoMap } from "../mappers/produto.map";
import { StatusProduto } from "@modules/catalogo/domain/produto/produto.types";
import { produtoIncludeCategoriaPrisma } from "@shared/infra/database/prisma.types";

const prismaMock: DeepMockProxy<PrismaClient> = mockDeep<PrismaClient>();
let produtoRepositorio: ProdutoPrismaRepository;
let UUIDValido: string;

describe('Repositório Prisma: Produto', () => {

    beforeAll(async () => {

        produtoRepositorio = new ProdutoPrismaRepository(prismaMock);
        UUIDValido = faker.string.uuid();
        
    });

    afterEach(() => {
        vi.restoreAllMocks();
        mockReset(prismaMock);
    });

    describe('Recuperar Produto por ID', () => {

        test('Deve Recuperar Um Produto por UUID', async () => {

            const ProdutoPrisma = {
                id: UUIDValido,
                nome: 'nomeProduto',
                descricao: 'descricao teste',
                valor: 0,
                dataCriacao: faker.date.anytime(),
                dataAtualizacao: faker.date.anytime(),
                dataExclusao: faker.date.anytime(),
                status: StatusProduto.ATIVO,
                categorias: [
                  {
                    produtoId: '94b646a0-0af1-43d2-a4a5-4b907bf2d2bd',
                    categoriaId: '3154c9eb-35f0-452f-a94b-87fe429281ce',
                    dataCriacao: faker.date.anytime(),
                    dataAtualizacao: faker.date.anytime(),
                    categoria: {
                        id: '3154c9eb-35f0-452f-a94b-87fe429281ce',
                        nome: 'mesa',
                        dataCriacao: faker.date.anytime(),
                        dataAtualizacao: faker.date.anytime()
                    }
                  },
                  {
                    produtoId: '94b646a0-0af1-43d2-a4a5-4b907bf2d2bd',
                    categoriaId: '8886a1e0-2940-42ec-8ab3-1a4688bbd50e',
                    dataCriacao: faker.date.anytime(),
                    dataAtualizacao: faker.date.anytime(),
                    categoria: {
                        id: '8886a1e0-2940-42ec-8ab3-1a4688bbd50e',
                        nome: 'banho',
                        dataCriacao: faker.date.anytime(),
                        dataAtualizacao: faker.date.anytime(),
                    }
                  }
                ]
              };

            prismaMock.produto.findUnique.mockResolvedValue(ProdutoPrisma);

            const produto: Produto = ProdutoMap.fromPrismaModelToDomain(ProdutoPrisma);

            const produtoRecuperado = await produtoRepositorio.recuperarPorUuid(produto.id);

            expect(produtoRecuperado).toEqual(produto);
            expect(prismaMock.produto.findUnique).toHaveBeenCalledTimes(1);
            expect(prismaMock.produto.findUnique).toBeCalledWith({
                where: {
                    id: produto.id,
                },
                include: produtoIncludeCategoriaPrisma
            });    
            }); 

        });

    });