export class Medico{
    id : string;
    nome: string;
    dataesq: string;
    espc: string;
    cpf: string;
    endereco: string;
    numero: string;
    cidade : string;
    estado: string;
    email: string;
    telefone: string;
    


    setData(objFirebase : any){
        this.nome = objFirebase.nome;
        this.dataesq = objFirebase.dataesq;
        this.espc = objFirebase.dataesq;
        this.cpf = objFirebase.cpf;
        this.endereco = objFirebase.endereco;
        this.numero = objFirebase.numero;
        this.cidade = objFirebase.cidade;
        this.estado = objFirebase.estado;
        this.email = objFirebase.email;
        this.telefone = objFirebase.telefone;
        
    }

}