import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Medico } from '../model/medico';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-direcionar-consulta',
  templateUrl: './direcionar-consulta.page.html',
  styleUrls: ['./direcionar-consulta.page.scss'],
})
export class DirecionarConsultaPage implements OnInit {

 
  medico : Medico = new Medico();

  constructor(private medicoServ : MedicoService,
    private route: ActivatedRoute,
    private navCtrl : NavController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.medicoServ.buscaPorId(id).subscribe(response=>{
        this.medico = response;
        
      })

    })

  }

  atualizar(){
    this.navCtrl.navigateForward(['/medico-atualizar',this.medico.id]);
  }

  excluir(){
    this.navCtrl.navigateForward(['/medico-excluir',this.medico.id]);
  }

}