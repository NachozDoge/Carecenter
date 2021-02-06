
export class Exame{  
    id : string;
    sangue: string;
    data: string;
    estado : string;
    medico: string; // nome do médico
    idmedico: string;
    idpaciente: string;
    metodo: string;
    paciente: string; // nome do paciente

    setData(objFirebase : any){
        this.estado = objFirebase.estado;
        this.data = objFirebase.data;
        this.medico = objFirebase.medico;
        this.sangue = objFirebase.sangue;
        this.idmedico = objFirebase.idmedico;
        this.idpaciente = objFirebase.idpaciente;
        this.metodo = objFirebase.metodo; 
        this.paciente = objFirebase.paciente;

    }

}