import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Medico } from '../model/medico';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-medico-exames',
  templateUrl: './medico-exames.page.html',
  styleUrls: ['./medico-exames.page.scss'],
})
export class MedicoExamesPage implements OnInit {

  @ViewChild("nome") nome; 

  lista : Medico[] = [];
  espc: any;


  constructor(private medicoServ : MedicoService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.medicoServ.listaDemedico().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }

  visualizar(id){
    this.navCtrl.navigateForward(['/exame-visualizar',id])
  }

  agendar(id){
    this.navCtrl.navigateForward(['/agendar-exame',id])
  }

  pesquisar(){
    console.log("Busca por: "+this.nome.value)
    this.medicoServ.buscaPorEspecialidade(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
