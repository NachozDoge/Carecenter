
export class Exame{
    id : string;
    cidade : string;
    exame: string;
    medico: string;
    sangue: string;

    


    setData(objFirebase : any){
        this.cidade = objFirebase.cidade;
        this.exame = objFirebase.exame;
        this.medico = objFirebase.medico;
        this.sangue = objFirebase.sangue;
        
    }

}