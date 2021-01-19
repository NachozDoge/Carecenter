export class Marcar{

    id : string;
    nome: string;
    cidade: string;
    metodo: string;


    setData(objFirebase : any){
        this.nome = objFirebase.cpf;
        this.cidade = objFirebase.cidade;
        this.metodo = objFirebase.email;
    }

}