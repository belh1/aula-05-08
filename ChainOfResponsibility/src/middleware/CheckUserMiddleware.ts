import Database from "../servers/Database";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware{

    public check(email: string, password: string): boolean {
       if(email.indexOf("@")===-1){//nao esta
        console.error("E-mail invalido");
        return false;
       }
       //email valido verificar se esta na base/ percore o dadabase item a item é qual o email que estou inserindo nao esta na base
       if(!Database.filter(item => item.email === email &&
        item.password === password)){
            console.error("Usuario nao Encontrado")
            return false;
        }
        //se tiver procura no  proximo
        return this.checkNext(email,password)
    }

}