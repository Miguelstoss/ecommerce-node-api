import { type } from "os";

interface IDatasControle {
    dataCriacao?: Date;
    dataAtualizacao?: Date;
    dataExclusao?: Date | null;
}

type KeysDatasControles = keyof IDatasControle;

export { IDatasControle, KeysDatasControles }