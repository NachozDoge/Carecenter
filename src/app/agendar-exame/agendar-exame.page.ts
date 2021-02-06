import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { exameService } from '../services/exame.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Perfil } from '../model/perfil';
import { PerfilService } from '../services/perfil.service';
import { TemplateService } from '../service/template';
import { Exame } from '../model/exame';

@Component({
  selector: 'app-agendar-exame',
  templateUrl: './agendar-exame.page.html',
  styleUrls: ['./agendar-exame.page.scss'],
})
export class AgendarExamePage implements OnInit {

  formGroup: FormGroup;

  exame: Exame = new Exame();
  perfil: Perfil = new Perfil();

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private perfilservice: PerfilService,
    private auth: AngularFireAuth,
    private exameServ: exameService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
  ) {
    this.iniciarForm();
  }
  ngOnInit() {

    this.route.paramMap.subscribe(url => {
      let id = url.get('id');

      this.exameServ.buscaPorId(id).subscribe(response => {
        this.exame = response;
        this.iniciarForm();
      })

    })

  }
  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      sangue: [this.exame.sangue],
      idmedico: [this.exame.idmedico],
      idpaciente: [this.exame.idpaciente],
      estado: [],
      metodo: [],
      data: [],
      medico: [],
      paciente: [],
    })
  }
  cadastrar() {
    this.template.loading.then(load => {

      load.present();

      this.exameServ.cadastrar(this.formGroup.value).subscribe(response => {
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

