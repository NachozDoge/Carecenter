import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { exameService } from '../services/exame.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-agendar-exame',
  templateUrl: './agendar-exame.page.html',
  styleUrls: ['./agendar-exame.page.scss'],
})
export class AgendarExamePage implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private exameServ: exameService,
  ) {
    this.iniciarForm();
  }

  ngOnInit() {
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      sangue: [],
      cidade: [],
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
