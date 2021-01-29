import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Medico } from '../model/medico';
import { TemplateService } from '../service/template';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-medico-atualizar',
  templateUrl: './medico-atualizar.page.html',
  styleUrls: ['./medico-atualizar.page.scss'],
})
export class MedicoAtualizarPage implements OnInit {

  
  formGroup : FormGroup;
  medico : Medico = new Medico();

  constructor(private medicoServ : MedicoService,
    private menuCtrl : MenuController,
    private route: ActivatedRoute,
    private navCtrl : NavController,
    private formBuilder : FormBuilder,
    private template : TemplateService) {
      this.iniciarForm();
    }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.medicoServ.buscaPorId(id).subscribe(response=>{
        this.medico = response;
        this.iniciarForm();
      })

    })

  }

  atualizar() {
    this.template.loading.then(load => {

      load.present();

      this.medicoServ.atualizar(this.formGroup.value).subscribe(response => {
        console.log("OK");
        load.dismiss();
        this.template.myAlert(response);
      }, erro => {
        console.log("Erro");
        load.dismiss();
        this.template.myAlert("Erro ao Cadastrar");
      })

    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.medico.id],
      nome: [this.medico.nome],
      dataesq: [this.medico.dataesq],
      espc: [this.medico.espc],
      cpf: [this.medico.cpf],
      endereco: [this.medico.endereco],
      numero: [this.medico.numero],
      cidade: [this.medico.cidade],
      estado: [this.medico.estado],
      email: [this.medico.email],
      telefone: [this.medico.telefone]
    })
  }

}
