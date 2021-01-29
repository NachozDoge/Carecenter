import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TemplateService } from '../service/template';
import { medicoService } from '../services/medico.service';


@Component({
  selector: 'app-cadastrar-medico',
  templateUrl: './cadastrar-medico.page.html',
  styleUrls: ['./cadastrar-medico.page.scss'],
})
export class CadastrarMedicoPage implements OnInit {
  
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private medicoServ: medicoService
  ) {
    this.iniciarForm();
  }

  ngOnInit() {
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      nome: [],
      dataesq: [],
      espc: [],
      cpf: [],
      endereco: [],
      numero: [],
      cidade: [],
      estado: [],
      email: [],
      telefone: []
    })
  }

  cadastrar() {
    this.template.loading.then(load => {

      load.present();

      this.medicoServ.cadastrar(this.formGroup.value).subscribe(response => {
        console.log("OK");
        load.dismiss();
        this.template.myAlert(response);
      }, () => {
        console.log("Erro");
        load.dismiss();
        this.template.myAlert("Erro ao Cadastrar");
      })

    })
  }
}
