
export class Exame{
    id : string;
    cidade : string;
    medico: string; // nome do médico
    exame: string;
    idmedico: string;
    idpaciente: string;
    paciente: string; // nome do paciente

    setData(objFirebase : any){
        this.cidade = objFirebase.cidade;
        this.medico = objFirebase.medico;
        this.exame = objFirebase.exame;
        this.idmedico = objFirebase.idmedico;
        this.idpaciente = objFirebase.idpaciente;
        this.paciente = objFirebase.paciente;

    }

}