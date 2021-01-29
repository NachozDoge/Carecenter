export class Cadastrar{

    id : string;
    cidade: string;
    idade: string;
    cpf: string;
    email: string;
    sangue: string;
    endereco: string;
    estado: string;
    nome: string;
    numero: string;
    telefone: string;


    setData(objFirebase : any){
        this.cidade = objFirebase.cidade;
        this.idade = objFirebase.idade;
        this.cpf = objFirebase.cpf;
        this.email = objFirebase.email;
        this.sangue = objFirebase.sangue;
        this.endereco = objFirebase.endereco;
        this.nome = objFirebase.nome;
        this.numero = objFirebase.numero;
        this.telefone = objFirebase.telefone;
        this.estado = objFirebase.estado;
    }

}