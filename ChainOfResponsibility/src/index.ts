
import * as readline from "readline";
import CheckPermissionMiddleware from "./middleware/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middleware/CheckUserMiddleware";
import Server from "./servers/servers";

declare var process;

const servers = new Server();

function setPromptQuestions(){
    const rl = readline. createInterface({
        input :process.stdin,
        output : process.stdout
    });
    rl.question("Digite seu email: " , email => {
        rl.question("Digite sua senha: ", password =>{
        servers.login(email,password);
        rl.close();
        });
    });
    //VERIFICA SEM PARAR(LOOP)
    rl.on("close", ()=> setPromptQuestions());
}
const middleare = new CheckUserMiddleware();
middleare.linkWith(new CheckPermissionMiddleware());
servers.setMiddleware(middleare);

setPromptQuestions();