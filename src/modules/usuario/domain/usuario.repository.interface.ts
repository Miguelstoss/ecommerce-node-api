import { IRepository } from "@shared/domain/repository.interface";
import { CredenciaisUsuarioProps, Usuario } from "./usuario.entity";

interface IUsuarioRepository<T> extends IRepository<T> {

    autenticar(usuario:Usuario): Promise<boolean>;
    recuperarPorEmail(email:string):  Promise<Usuario | null>;

}

interface IUsuarioRepository<T> extends IRepository<T> {

    autenticar(credenciais: CredenciaisUsuarioProps): Promise<boolean>;
    recuperarPorEmail(email: string): Promise<Usuario | null>;

}

export { IUsuarioRepository }