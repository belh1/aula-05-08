export default abstract class Middleware{
    public next : Middleware;
    public linkWith(next :Middleware) : Middleware{
        this.next=next;
        return this.next;
    }
    public abstract check(email: string, password:string) : boolean

    protected checkNext(email:string,password:string): boolean{
        if(this.next === undefined){//verifica se o proximo é nulo
            return true;
        }
        return this.next.check(email,password);
    }
}