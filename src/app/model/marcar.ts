export class Marcar{

    id : string;
    nome: string;
    cidade: string;
    metodo: string;
    endereco: string;
    estado: string;
    numero: string;
    telefone: string;



    setData(objFirebase : any){
        this.nome = objFirebase.nome;
        this.cidade = objFirebase.cidade;
        this.metodo = objFirebase.metodo;
        this.endereco = objFirebase.endereco;
        this.nome = objFirebase.nome;
        this.numero = objFirebase.numero;
        this.telefone = objFirebase.telefone;
        this.estado = objFirebase.estado;
    }

}