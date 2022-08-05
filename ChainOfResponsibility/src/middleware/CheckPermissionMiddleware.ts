import Database from "../servers/Database";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware{
    //verifica a permissao 
    public check(email: string, password: string): boolean {
       console.log("Verifica Permisao")
       const users = Database.filter(item => item.email=== email);

       if(!users.length){
           console.error("email nao cadastrado");
           return false;
       }
       if(users[0].permission === PermissionType.ADMIM){
       console.log("Bem vindo admistrador");
    }else{
        console.log("bem vindo usuario");
    }
  }
}