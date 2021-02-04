
export class Exame{  
    id : string;
    exame: string;
    data: string;
    estado : string;
    medico: string; // nome do médico
    idmedico: string;
    idpaciente: string;
    paciente: string; // nome do paciente

    setData(objFirebase : any){
        this.estado = objFirebase.estado;
        this.data = objFirebase.data;
        this.medico = objFirebase.medico;
        this.exame = objFirebase.exame;
        this.idmedico = objFirebase.idmedico;
        this.idpaciente = objFirebase.idpaciente;
        this.paciente = objFirebase.paciente;

    }

}