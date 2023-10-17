import { faker } from '@faker-js/faker';
import { IDEntityUUIDInvalid } from '@shared/domain/domain.exception';
import { beforeAll, describe, expect, test } from 'vitest';
import { Categoria } from './categoria.entity';
import { NomeCategoriaTamanhoMaximoInvalido, NomeCategoriaTamanhoMinimoInvalido } from './categoria.exception';
import { CriarCategoriaProps, RecuperarCategoriaProps } from './categoria.types';

let nomeCategoriaValido: string;
let nomeCategoriTamanhoMinInvalido: string;
let nomeCategoriTamanhoMaxInvalido: string;
let UUIDValido: string;
let UUIDInvalido: string;


beforeAll(async () => {

    //Preenchendo as variaveis com dados em conformidade com as retrições da regra de negócio
    nomeCategoriaValido = faker.string.alpha({length:{min:3,max:50}});
    nomeCategoriTamanhoMinInvalido = faker.string.alpha({length:{min:0,max:2}});
    nomeCategoriTamanhoMaxInvalido = faker.string.alpha({length:{min:51,max:51}});
    UUIDValido = faker.string.uuid();
    UUIDInvalido = faker.string.alpha({length:{min:1,max:20}});

});

//Suite de Testes de Unidade - Entidade de Domínio
//Usando a descrição, você pode definir como um conjunto de testes ou benchmarks relacionados
describe('Entidade de Domínio: Categoria', () => {

    describe('Criar Categoria', () => {

        //Teste define um conjunto de expectativas relacionadas. 
        test('Deve Criar Uma Categoria Válida', async () => {
    
            //Dado (Given)
            const categoriaValida: CriarCategoriaProps = {
                nome: nomeCategoriaValido
            };
    
            //Quando (When) e Então (Then)
            expect(Categoria.criar(categoriaValida))
                .to.be.instanceof(Categoria);
    
        });
    
        test('Não Deve Criar Categoria Com Nome Inválido (Tamanho Mínimo)', async () => {
    
            //Dado (Given)
            //Nome menor que três caracteres
            const categoriaNomeInvalido: CriarCategoriaProps = {
                nome: nomeCategoriTamanhoMinInvalido
            };
    
            //Quando (When) e Então (Then)
            expect(() => Categoria.criar(categoriaNomeInvalido))
                .toThrowError(NomeCategoriaTamanhoMinimoInvalido);
    
        });
    
        test('Não Deve Criar Categoria Com Nome Inválido (Tamanho Máximo)', async () => {
    
            //Dado (Given)
            //Nome maior que 50 caracteres
            const categoriaNomeInvalido: CriarCategoriaProps = {
                nome: nomeCategoriTamanhoMaxInvalido
            };
    
            //Quando (When) e Então (Then)
            expect(() => Categoria.criar(categoriaNomeInvalido))
                .toThrowError(NomeCategoriaTamanhoMaximoInvalido);
    
        });
    
    });

    describe('Recupear Categoria', () => {

        test('Deve Recuperar Uma Categoria Válida', async () => {
    
            //Dado (Given)
            const categoriaValida: RecuperarCategoriaProps = {
                id: UUIDValido,
                nome: nomeCategoriaValido
            };
     
            //Quando (When) e Então (Then)
            expect(Categoria.recuperar(categoriaValida))
                .to.be.instanceof(Categoria);
    
        });
    
        test('Não Deve Recuperar Categoria Com ID Inválido (UUID Inválido)', async () => {
    
            //Dado (Given)
            //Nome menor que três caracteres
            const categoriaIdInvalido: RecuperarCategoriaProps = {
                id: UUIDInvalido,
                nome: nomeCategoriaValido
            };
    
            //Quando (When) e Então (Then)
            expect(() => Categoria.recuperar(categoriaIdInvalido))
                .toThrowError(IDEntityUUIDInvalid);
    
        });
    
        test('Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Mínimo)', async () => {
    
            //Dado (Given)
            //Nome menor que três caracteres
            const categoriaNomeInvalido: RecuperarCategoriaProps = {
                id: UUIDValido,
                nome: nomeCategoriTamanhoMinInvalido
            };
    
            //Quando (When) e Então (Then)
            expect(() => Categoria.recuperar(categoriaNomeInvalido))
                .toThrowError(NomeCategoriaTamanhoMinimoInvalido);
    
        });
    
        test('Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Máximo)', async () => {
    
            //Dado (Given)
            //Nome maior que 50 caracteres
            const categoriaNomeInvalido: RecuperarCategoriaProps = {
                id: UUIDValido,
                nome: nomeCategoriTamanhoMaxInvalido
            };
    
            //Quando (When) e Então (Then)
            expect(() => Categoria.recuperar(categoriaNomeInvalido))
                .toThrowError(NomeCategoriaTamanhoMaximoInvalido);
    
        });
    
    });
    
});



