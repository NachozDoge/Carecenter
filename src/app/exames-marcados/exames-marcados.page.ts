import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

import { Exame } from '../model/exame';

import { exameService } from '../services/exame.service';

@Component({
  selector: 'app-exames-marcados',
  templateUrl: './exames-marcados.page.html',
  styleUrls: ['./exames-marcados.page.scss'],
})
export class ExamesMarcadosPage implements OnInit {

  @ViewChild("exame") exame; 

  lista : Exame[] = [];

  constructor(
    private menuCtrl : MenuController,
    private exameservice : exameService,
    private navCtrl : NavController
  ) { }

  ngOnInit() {
    this.exameservice.listaDeExame().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  visualizar(exame){
    this.navCtrl.navigateForward(['/exame-visualizar',exame.id])
  }

  pesquisar(){
    console.log("Busca por: "+this.exame.value)
    this.exameservice.buscaPorNome(this.exame.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }

}