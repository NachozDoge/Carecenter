
export class Exame{
    id : string;
    cidade : string;
    exame: string;
    medico: string;
    sangue: string;
    idade: string;
    cpf: string;
    email: string;
    endereco: string;
    estado: string;
    nome: string;
    numero: string;
    telefone: string;

    


    setData(objFirebase : any){
        this.id = objFirebase.id;
        this.cidade = objFirebase.cidade;
        this.exame = objFirebase.exame;
        this.medico = objFirebase.medico;
        this.sangue = objFirebase.sangue;
        this.idade = objFirebase.idade;
        this.cpf = objFirebase.cpf;
        this.email = objFirebase.email;
        this.endereco = objFirebase.endereco;
        this.nome = objFirebase.nome;
        this.numero = objFirebase.numero;
        this.telefone = objFirebase.telefone;
        this.estado = objFirebase.estado;
        
    }

}