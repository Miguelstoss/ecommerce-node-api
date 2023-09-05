import { DomainException } from "@shared/domain/domain.exception";

class ProdutoException extends DomainException {
    constructor(message: string = '⚠ Execução de Domínio Genérica da Entidade Produto') {
        super(message);
        this.name = 'ProdutoException'
        this.message = message;
    }
}

class NomeProdutoTamanhoMinimoInvalido extends ProdutoException {
    constructor(message: string = '⚠ O nome do produto não possui tamanho mínimo válido') {
        super(message);
        this.name = 'NomeProdutoTamanhoMinimoInvalido'
        this.message = message;
    }
}

class NomeProdutoTamanhoMaximoInvalido extends ProdutoException {
    constructor(message: string = '⚠ O nome do produto não possui tamanho máximo válido') {
        super(message);
        this.name = 'NomeProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMinimoInvalido extends ProdutoException {
    constructor(message: string = '⚠ A descrição do produto não possui tamanho mínimo válido') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMinimoInvalido'
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMaximoInvalido extends ProdutoException {
    constructor(message: string = '⚠ A descrição do produto não possui tamanho máximo válido') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class ValorMinimoProdutoInvalido extends ProdutoException {
    constructor(message: string = '⚠ O valor mínimo do produto é inválido') {
        super(message);
        this.name = 'ValorMinimoProdutoInvalido'
        this.message = message;
    }
}

class QtdMinimaCategoriasProdutoInvalida extends ProdutoException {
    constructor(message: string = '⚠ A quantidade mínima de catgorias no produto é inválida') {
        super(message);
        this.name = 'QtdMinimaCategoriasProdutoInvalida'
        this.message = message;
    }
}

class QtdMaximaCategoriasProdutoInvalida extends ProdutoException {
    constructor(message: string = '⚠ A quantidade máxima de catgorias no produto é inválida') {
        super(message);
        this.name = 'QtdMaximaCategoriasProdutoInvalida'
        this.message = message;
    }
}

export {
    DescricaoProdutoTamanhoMaximoInvalido, DescricaoProdutoTamanhoMinimoInvalido, NomeProdutoTamanhoMaximoInvalido, NomeProdutoTamanhoMinimoInvalido, ProdutoException, QtdMaximaCategoriasProdutoInvalida, QtdMinimaCategoriasProdutoInvalida, ValorMinimoProdutoInvalido
};
