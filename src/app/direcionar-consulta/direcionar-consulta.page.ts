import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Medico } from '../model/medico';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-direcionar-consulta',
  templateUrl: './direcionar-consulta.page.html',
  styleUrls: ['./direcionar-consulta.page.scss'],
})
export class DirecionarConsultaPage implements OnInit {

  formGroup: FormGroup;

  medico : Medico = new Medico();

  constructor(private formBuilder: FormBuilder,
    private medicoServ : MedicoService,
    private route: ActivatedRoute,
    private navCtrl : NavController,
    ) {
      this.iniciarForm();
     }
     ngOnInit() {

      this.route.paramMap.subscribe(url=>{
        let id = url.get('id');
        
        this.medicoServ.buscaPorId(id).subscribe(response=>{
          this.medico = response;
          
        })
  
      })
  
    }
    iniciarForm() {
      this.formGroup = this.formBuilder.group({
        nome: [],
        data: [],
        metodo: [],
      })
    }
  }