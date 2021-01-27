
export class Exame{
    id : string;
    cidade : string;
    medico: string;
    sangue: string;
    


    setData(objFirebase : any){
        this.cidade = objFirebase.cidade;
        this.medico = objFirebase.medico;
        this.sangue = objFirebase.sangue;
        
    }

}